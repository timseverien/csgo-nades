import * as path from 'path';

export interface FileNameNadeThrowInfo {
	fileName: string;
	map: string;
	tickRate: number;
	location: string;
	target: string;
}

export function getFileInfo(fileName: string): FileNameNadeThrowInfo | null {
	const fileMatch = path
		.basename(fileName, path.extname(fileName))
		.match(/^(?<map>[a-z]{2}_[a-z]+)-(?<tickRate>[0-9]+)-(?<location>.+?)-to-(?<target>.+?)$/);

	if (!fileMatch?.groups) {
		return null;
	}

	const { map, tickRate, location, target } = fileMatch.groups;

	return {
		fileName,
		map,
		tickRate: Number.parseInt(tickRate, 10),
		location,
		target,
	};
}
