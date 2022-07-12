import { spawnSync } from 'child_process';
import * as ffmpeg from 'ffmpeg-static';
import * as glob from 'glob';
import * as path from 'path';
import * as readline from 'readline';

const [directorySource, directoryDestination, targetSize] = process.argv.slice(2);
const [width, height] = targetSize.split('x').map((v) => Number.parseInt(v, 10));

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const sourceFiles = glob.sync(`${directorySource}/*.mp4`);

rl.question('Overwrite existing files? (y/N)\r\n', (overwrite) => {
	const overwriteArgs = overwrite.toLowerCase() === 'y' ? ['-y'] : ['-n'];

	for (const sourceFile of sourceFiles) {
		const fileName = path.basename(sourceFile, path.extname(sourceFile));
		const destinationFileMp4 = path.resolve(directoryDestination, `${fileName}.mp4`);

		console.log(`Optimizing ${fileName}`);

		spawnSync(ffmpeg, [
			...overwriteArgs,
			'-i',
			sourceFile,
			// scale video
			'-vf',
			[`scale=${width}:-1`, 'fps=fps=30', `crop=${width}:${height}`].join(', '),
			// drop audio
			'-an',
			// set bitrate
			'-b:v',
			'1M',
			destinationFileMp4,
		]);
	}

	rl.close();
});
