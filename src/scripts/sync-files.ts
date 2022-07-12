import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';
import {
	getNadeLineupImageSources,
	getNadeLineupReleaseImageSources,
	getNadeVideoSources,
	isMovingNadeThrow,
} from '../NadeThrow';
import { nadeThrows } from '../nadeThrows';

const [DIR_PUBLIC] = process.argv.slice(2);
const missingFiles: string[] = [];
const missingConfiguration: string[] = [];

for (const file of glob.sync(`${DIR_PUBLIC}/nades/*.mp4`)) {
	const fileName = path.basename(file, path.extname(file));

	if (nadeThrows.every((n) => n.id !== fileName)) {
		missingConfiguration.push(fileName);
	}
}

for (const nade of nadeThrows) {
	const files = [
		...getNadeVideoSources(nade),
		...getNadeLineupImageSources(nade),
		...(isMovingNadeThrow(nade) ? getNadeLineupReleaseImageSources(nade) : []),
	].map((p) => path.resolve(DIR_PUBLIC, p.url));

	for (const file of files) {
		if (!fs.pathExistsSync(file)) {
			missingFiles.push(file);
		}
	}
}

if (missingConfiguration.length > 0) {
	console.error(
		`The following configurations are missing:\n${missingConfiguration
			.map((c) => ` - ${c}`)
			.join('\n')}`,
	);
}

if (missingFiles.length > 0) {
	console.error(
		`The following files are missing:\n${missingFiles
			.map((f) => ` - ${path.relative(DIR_PUBLIC, f)}`)
			.join('\n')}`,
	);
}

if (missingConfiguration.length > 0 || missingFiles.length > 0) {
	process.exit(1);
}
