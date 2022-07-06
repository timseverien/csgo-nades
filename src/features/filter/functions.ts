import _ from 'lodash';
import { NadeThrow } from '../../Nade';
import { NadeFilterResult } from './types';

export const createLocationListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const locations = nadeList.map((n: NadeThrow) =>
		n.location.name.includes('-')
			? n.location.name.substring(0, n.location.name.indexOf('-'))
			: n.location.name,
	);

	return _.uniq(locations).sort((a, b) => a.localeCompare(b));
};

export const createMapListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const maps = nadeList.map((n) => n.map);

	return _.uniq(maps).sort((a, b) => a.localeCompare(b));
};

export const createTargetListFromNadeList: (nadeList: NadeThrow[]) => string[] = (nadeList) => {
	const targets = nadeList.map((n: NadeThrow) =>
		n.target.name.includes('-')
			? n.target.name.substring(0, n.target.name.indexOf('-'))
			: n.target.name,
	);

	return _.uniq(targets).sort((a, b) => a.localeCompare(b));
};

export const createTickRateOptionsFromNadeList: (nadeList: NadeThrow[]) => number[] = (
	nadeList,
) => {
	const maps = nadeList.map((n) => n.tickRate);

	return _.uniq(maps).sort((a, b) => a.toString().localeCompare(b.toString()));
};

export const filterNadeListByNadeFilterResult: (
	nadeList: NadeThrow[],
	filterResult: NadeFilterResult,
) => NadeThrow[] = (nadeList, filterResult) => {
	let result = nadeList
		.filter((n) => n.tickRate === filterResult.tickRate)
		.filter((n) => n.map === filterResult.map);

	if (filterResult.location) {
		result = result.filter(
			(n) =>
				n.location.name === filterResult.location ||
				n.location.name.startsWith(`${filterResult.location}-`),
		);
	}

	if (filterResult.target) {
		result = result.filter(
			(n) =>
				n.target.name === filterResult.target ||
				n.target.name.startsWith(`${filterResult.target}-`),
		);
	}

	return result;
};

export const createLocationTag: (location: string) => string = (location) => {
	if (location.length <= 2) {
		return location.toUpperCase();
	}

	return location.substring(0, 1).toUpperCase() + location.substring(1);
};

export const formatLocation: (location: string) => string = (location) => {
	return location
		.split('-')
		.map((l, i) => {
			if (l.length <= 2) {
				return l.toUpperCase();
			}

			if (i === 0) {
				return l.substring(0, 1).toUpperCase() + l.substring(1);
			}

			return l;
		})
		.join(' ');
};

export const formatText: (text: string) => string = (text) => {
	return text.substring(0, 1).toUpperCase() + text.substring(1);
};
