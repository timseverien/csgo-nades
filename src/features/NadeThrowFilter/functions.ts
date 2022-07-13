import _ from 'lodash';
import { NadeThrow, TickRate } from '../../NadeThrow';
import { NadeThrowFilterOptions } from './types';

export const createFromListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const fromList = nadeList.map((n: NadeThrow) => n.from);

	return _.uniq(fromList).sort((a, b) => a.localeCompare(b));
};

export const createMapListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const maps = nadeList.map((n) => n.map);

	return _.uniq(maps).sort((a, b) => a.localeCompare(b));
};

export const createTickRateOptionsFromNadeList: (nadeList: NadeThrow[]) => TickRate[] = (
	nadeList,
) => {
	if (nadeList.some((n) => n.tickRate === TickRate.any)) {
		return [TickRate.low, TickRate.high];
	}

	const options: TickRate[] = [];

	if (nadeList.some((n) => n.tickRate === TickRate.low)) {
		options.push(TickRate.low);
	}

	if (nadeList.some((n) => n.tickRate === TickRate.high)) {
		options.push(TickRate.high);
	}

	return options;
};

export const createToListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const toList = nadeList.map((n: NadeThrow) => n.to);

	return _.uniq(toList).sort((a, b) => a.localeCompare(b));
};

export const filterNadeListByNadeFilterResult: (
	nadeList: NadeThrow[],
	filterOptions: NadeThrowFilterOptions,
) => NadeThrow[] = (nadeList, filterOptions) => {
	let result = nadeList
		.filter((n) => n.tickRate === TickRate.any || n.tickRate === filterOptions.tickRate)
		.filter((n) => n.map === filterOptions.map);

	if (filterOptions.from) {
		result = result.filter((n) => n.from === filterOptions.from);
	}

	if (filterOptions.to) {
		result = result.filter((n) => n.to === filterOptions.to);
	}

	return result;
};
