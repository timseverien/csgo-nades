import { spawnSync } from 'child_process';
import ffmpeg from 'ffmpeg-static';
import { globbySync } from 'globby';
import path from 'path';
import readline from 'readline';

const [directorySource, directoryDestination] = process.argv.slice(2);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const sourceFiles = globbySync(`${directorySource}/*.mp4`);
const filenameRegex =
	/^(?<map>.+?)-(?<tick>[0-9]{2,3})-(?<position>.+?)-to-(?<target>.+?)(-[0-9]+)?.mp4$/;

rl.question('Overwrite existing files? (y/N)\r\n', (overwrite) => {
	const overwriteArgs = overwrite.toLowerCase() === 'y' ? ['-y'] : ['-n'];

	for (const sourceFile of sourceFiles) {
		const fileName = path.basename(sourceFile, path.extname(sourceFile));
		const destinationFileMp4 = path.resolve(directoryDestination, `${fileName}.mp4`);

		spawnSync(ffmpeg, [
			...overwriteArgs,
			'-i',
			sourceFile,
			// scale video
			'-vf',
			['scale=640:-1', 'fps=fps=30', 'crop=640:360'].join(', '),
			// drop audio
			'-an',
			// set bitrate
			'-b:v',
			'1M',
			destinationFileMp4,
		]);

		const {
			map,
			position,
			target,
			tick: tickString,
		} = path.basename(sourceFile).match(filenameRegex).groups;

		const tickRate = Number.parseInt(tickString);

		console.log(
			JSON.stringify({
				map,
				tickRate,
				location: {
					name: position.toLowerCase(),
					position: [0, 0, 0],
				},
				target: {
					name: target.toLowerCase(),
					position: [0, 0, 0],
				},
				throwAnimationUrl: `nades/${path.basename(destinationFileMp4)}`,
				throwPointImageUrl: '',
				throwReleaseImageUrl: '',
			}),
		);
	}
});
