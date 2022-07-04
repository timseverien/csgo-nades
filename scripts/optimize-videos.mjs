import { spawn, spawnSync } from 'child_process';
import ffmpeg from 'ffmpeg-static';
import { globbySync } from 'globby';
import path from 'path';

const [directorySource, directoryDestination] = process.argv.slice(2);

const sourceFiles = globbySync(`${directorySource}/*.mp4`);
const filenameRegex =
	/^(?<map>.+?)-(?<tick>[0-9]{2,3})-(?<position>.+?)-to-(?<target>.+?)(-[0-9]+)?.mp4$/;

for (const sourceFile of sourceFiles) {
	const destinationFile = path.resolve(directoryDestination, path.basename(sourceFile));

	// TODO: crop square
	// TODO: reduce quality further

	// spawnSync(ffmpeg, [
	// 	// overwrite if file exists
	// 	// '-n',
	// 	// skip if file exists
	// 	// '-y',
	// 	'-i',
	// 	sourceFile,
	// 	// scale video
	// 	'-vf',
	// 	'scale=-1:640, fps=fps=30',
	// 	// drop audio
	// 	'-an',
	// 	// set bitrate
	// 	'-b:v',
	// 	'5M',
	// 	destinationFile,
	// ]);

	const {
		map,
		position,
		target,
		tick: tickString,
	} = path.basename(sourceFile).match(filenameRegex).groups;

	const tickRate = Number.parseInt(tickString);

	console.log({
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
		throwAnimationUrl: `nades/${path.basename(destinationFile)}`,
		throwPointImageUrl: '',
		throwReleaseImageUrl: '',
	});
}
