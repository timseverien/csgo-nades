import { FunctionalComponent } from 'preact';
import { NadeThrow } from '../../../../Nade';
import { PillList } from '../../../../components/Pill';
import {
	createLocationListFromNadeList,
	createLocationTag,
	createMapListFromNadeList,
	createTargetListFromNadeList,
	createTickRateOptionsFromNadeList,
	filterNadeListByNadeFilterResult,
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

	const targetOptions = createTargetListFromNadeList(
		filterNadeListByNadeFilterResult(nadeList, {
			location: null,
			map: nadeFilter.map,
			target: null,
			tickRate: nadeFilter.tickRate,
		}),
	).map((target) => ({
		label: createLocationTag(target.split('-').join(' ')),
		value: target,
	}));

	const locationOptions = createLocationListFromNadeList(
		filterNadeListByNadeFilterResult(nadeList, {
			location: null,
			map: nadeFilter.map,
			target: nadeFilter.target,
			tickRate: nadeFilter.tickRate,
		}),
	).map((location) => ({
		label: createLocationTag(location.split('-').join(' ')),
		value: location,
	}));

	return (
		<dl>
			<FilterRow label="Map">
				<PillList
					options={mapOptions}
					value={nadeFilter.map}
					onSelect={(map: string) =>
						onChange({
							...nadeFilter,
							location: null,
							map,
							target: null,
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
							location: null,
							target: null,
							tickRate,
						})
					}
				/>
			</FilterRow>

			<FilterRow label="Target">
				<PillList
					includeAll={true}
					options={targetOptions}
					value={nadeFilter.target}
					onSelect={(target: string) =>
						onChange({
							...nadeFilter,
							location: null,
							target,
						})
					}
				/>
			</FilterRow>

			{locationOptions.length > 1 && (
				<FilterRow label="Throw location">
					<PillList
						includeAll={true}
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
			)}
		</dl>
	);
};
