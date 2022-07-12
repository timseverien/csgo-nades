import _ from 'lodash';
import { NadeThrow } from '../../NadeThrow';
import { NadeThrowFilterOptions } from './types';

export const createFromListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const fromList = nadeList.map((n: NadeThrow) => n.from.name);

	return _.uniq(fromList).sort((a, b) => a.localeCompare(b));
};

export const createMapListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const maps = nadeList.map((n) => n.map);

	return _.uniq(maps).sort((a, b) => a.localeCompare(b));
};

export const createTickRateOptionsFromNadeList: (nadeList: NadeThrow[]) => number[] = (
	nadeList,
) => {
	const maps = nadeList.map((n) => n.tickRate);

	return _.uniq(maps).sort((a, b) => a.toString().localeCompare(b.toString()));
};

export const createToListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const toList = nadeList.map((n: NadeThrow) => n.to.name);

	return _.uniq(toList).sort((a, b) => a.localeCompare(b));
};

export const filterNadeListByNadeFilterResult: (
	nadeList: NadeThrow[],
	filterOptions: NadeThrowFilterOptions,
) => NadeThrow[] = (nadeList, filterOptions) => {
	let result = nadeList
		.filter((n) => n.tickRate === filterOptions.tickRate)
		.filter((n) => n.map === filterOptions.map);

	if (filterOptions.from) {
		result = result.filter((n) => n.from.name === filterOptions.from);
	}

	if (filterOptions.to) {
		result = result.filter((n) => n.to.name === filterOptions.to);
	}

	return result;
};
