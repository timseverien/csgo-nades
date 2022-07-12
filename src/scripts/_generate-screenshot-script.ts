import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';
import * as readline from 'readline';
import { ImageSource, MediaSource, NadeThrow, NonEmptyArray, VideoSource } from '../Nade';
import { FileNameNadeThrowInfo, getFileInfo } from './lib/throwNadeFile';

const [DIR_SOURCE, PATH_OUTPUT, DIR_PUBLIC] = process.argv.slice(2);

const EXTENSION_TYPE_MAPPING = {
	jpg: 'image/jpg',
	mp4: 'video/mp4',
	webp: 'image/webp',
};

function getUpdatedSourceList(sourceList: MediaSource[], fileName: string): MediaSource[] {
	const sourceUrl = `${DIR_PUBLIC}/${fileName}`;
	const extension = path.extname(fileName).substring(1);

	if (sourceList.some((vs) => vs.url === sourceUrl)) {
		return sourceList;
	}

	return [
		...sourceList,
		{
			type: EXTENSION_TYPE_MAPPING[extension],
			url: sourceUrl,
		},
	];
}

function getUpdatedNadeThrow(
	definition: Partial<NadeThrow>,
	info: FileNameNadeThrowInfo,
): Partial<NadeThrow> {
	return {
		...definition,
		map: info.map,
		tickRate: info.tickRate,

		location: {
			name: info.location,
			position: [0, 0, 0],
		},

		target: {
			name: info.target,
			position: [0, 0, 0],
		},

		throwAnimationUrl: getUpdatedSourceList(
			definition.throwAnimationUrl || [],
			info.fileName,
		) as NonEmptyArray<VideoSource>,

		throwPointImageUrl: getUpdatedSourceList(
			definition.throwPointImageUrl || [],
			info.fileName,
		) as NonEmptyArray<ImageSource>,

		throwReleaseImageUrl: getUpdatedSourceList(
			definition.throwReleaseImageUrl || [],
			info.fileName,
		) as ImageSource[],
	};
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const files = glob.sync(`${DIR_SOURCE}/*.{jpg,mp4,webp}`);

rl.question(
	'Overwrite existing data file? This will purge manual changes. (y/N)\r\n',
	async (overwriteAnswer) => {
		const overwrite = overwriteAnswer === 'y';

		if (!overwrite && fs.pathExistsSync(PATH_OUTPUT)) {
			console.log(`File "${PATH_OUTPUT}" already exists`);
			return;
		}

		const nadeThrowMap = files.reduce((map, file) => {
			const fileName = path.basename(file, path.extname(file));
			const fileInfo = getFileInfo(path.basename(file));

			if (!fileInfo) {
				return map;
			}

			const nadeThrow =
				fileName in map
					? getUpdatedNadeThrow(map[fileName], fileInfo)
					: getUpdatedNadeThrow({}, fileInfo);

			if (nadeThrow) {
				map[fileName] = nadeThrow;
			}

			return map;
		}, {} as Partial<NadeThrow>);

		await fs.writeJson(PATH_OUTPUT, nadeThrowMap, { spaces: 2 });

		rl.close();
	},
);
