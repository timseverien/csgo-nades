import { FunctionalComponent } from 'preact';
import { NadeThrow } from '../../../../Nade';
import { PillList } from '../../../../components/Pill';
import {
	createLocationListFromNadeList,
	createMapListFromNadeList,
	createTickRateOptionsFromNadeList,
	filterNadeListByMapAndTickRate,
} from '../../functions';
import { NadeFilterResult } from '../../types';
import styles from './style.module.css';

const FilterRow: FunctionalComponent<{ label: string }> = ({ children, label }) => (
	<>
		<dt class={styles.nadeFilterLabel}>{label}</dt>
		<dd>{children}</dd>
	</>
);

export const NadeFilter: FunctionalComponent<{
	nadeList: NadeThrow[];
	nadeFilter: NadeFilterResult;
	onChange: (result: NadeFilterResult) => any;
}> = ({ nadeList, nadeFilter, onChange }) => {
	const mapOptions = createMapListFromNadeList(nadeList);
	const tickRateOptions = createTickRateOptionsFromNadeList(nadeList);
	const locationOptions = createLocationListFromNadeList(
		filterNadeListByMapAndTickRate(nadeList, nadeFilter.map, nadeFilter.tickRate),
	);

	return (
		<dl>
			<FilterRow label="Map">
				<PillList
					options={mapOptions}
					value={nadeFilter.map}
					onSelect={(map: string) =>
						onChange({
							...nadeFilter,
							map,
						})
					}
				/>
			</FilterRow>
			<FilterRow label="Tick rate">
				<PillList
					options={tickRateOptions}
					value={nadeFilter.tickRate}
					onSelect={(tickRate: number) =>
						onChange({
							...nadeFilter,
							tickRate,
						})
					}
				/>
			</FilterRow>
			<FilterRow label="Location">
				<PillList
					options={locationOptions}
					value={nadeFilter.location}
					onSelect={(location: string) =>
						onChange({
							...nadeFilter,
							location,
						})
					}
				/>
			</FilterRow>
		</dl>
	);
};
