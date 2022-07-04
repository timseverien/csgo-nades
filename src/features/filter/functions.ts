import { uniq } from 'lodash';
import { NadeThrow } from '../../Nade';
import { NadeFilterResult } from './types';

export const createLocationListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const locations = [
		...nadeList.map((n: NadeThrow) => n.location.name),
		...nadeList.map((n: NadeThrow) => n.target.name),
	].flat();

	return uniq(locations).sort((a, b) => a.localeCompare(b));
};

export const createMapListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const maps = nadeList.map((n) => n.map);

	return uniq(maps).sort((a, b) => a.localeCompare(b));
};

export const createTickRateOptionsFromNadeList: (nadeList: NadeThrow[]) => number[] = (
	nadeList,
) => {
	const maps = nadeList.map((n) => n.tickRate);

	return uniq(maps).sort((a, b) => a.toString().localeCompare(b.toString()));
};

export const filterNadeListByMapAndTickRate: (
	nadeList: NadeThrow[],
	map: string,
	tickRate: number,
) => NadeThrow[] = (nadeList, map, tickRate) =>
	nadeList.filter((n) => n.tickRate === tickRate).filter((n) => n.map === map);

export const filterNadeListByNadeFilterResult: (
	nadeList: NadeThrow[],
	filterResult: NadeFilterResult,
) => NadeThrow[] = (nadeList, filterResult) => {
	let result = filterNadeListByMapAndTickRate(nadeList, filterResult.map, filterResult.tickRate);

	if (filterResult.location) {
		result = result.filter(
			(n) => n.location.name === filterResult.location || n.target.name === filterResult.location,
		);
	}

	return result;
};
