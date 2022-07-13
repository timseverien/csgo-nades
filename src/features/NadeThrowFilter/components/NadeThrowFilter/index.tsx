import { FunctionalComponent } from 'preact';
import { NadeThrow } from '../../../../NadeThrow';
import { PillList, PillListOption } from '../../../../components/Pill';
import {
	createFromListFromNadeList,
	createMapListFromNadeList,
	createTickRateOptionsFromNadeList,
	createToListFromNadeList,
	filterNadeListByNadeFilterResult,
} from '../../functions';
import { NadeThrowFilterOptions } from '../../types';
import style from './style.module.css';

function createPillListOption(value: string): PillListOption {
	return {
		label: value,
		value,
	};
}

const FilterRow: FunctionalComponent<{ label: string }> = ({ children, label }) => (
	<>
		<dt class={style.label}>{label}</dt>
		<dd class={style.value}>{children}</dd>
	</>
);

export const NadeThrowFilter: FunctionalComponent<{
	nadeList: NadeThrow[];
	filterOptions: NadeThrowFilterOptions;
	onChange: (result: NadeThrowFilterOptions) => any;
}> = ({ nadeList, filterOptions, onChange }) => {
	const mapOptions = createMapListFromNadeList(nadeList).map(createPillListOption);
	const tickRateOptions = createTickRateOptionsFromNadeList(nadeList).map((tr) => ({
		label: tr.toString(),
		value: tr,
	}));

	const fromOptions = createFromListFromNadeList(
		filterNadeListByNadeFilterResult(nadeList, {
			from: null,
			map: filterOptions.map,
			tickRate: filterOptions.tickRate,
			to: filterOptions.to,
		}),
	).map(createPillListOption);

	const toOptions = createToListFromNadeList(
		filterNadeListByNadeFilterResult(nadeList, {
			from: null,
			map: filterOptions.map,
			tickRate: filterOptions.tickRate,
			to: null,
		}),
	).map(createPillListOption);

	return (
		<dl class={style.nadeFilter}>
			<FilterRow label="Map">
				<PillList
					options={mapOptions}
					value={filterOptions.map}
					onSelect={(map: string) =>
						onChange({
							...filterOptions,
							from: null,
							map,
							to: null,
						})
					}
				/>
			</FilterRow>

			<FilterRow label="Tick rate">
				<PillList
					options={tickRateOptions}
					value={filterOptions.tickRate}
					onSelect={(tickRate: number) =>
						onChange({
							...filterOptions,
							from: null,
							tickRate,
							to: null,
						})
					}
				/>
			</FilterRow>

			<FilterRow label="To">
				<PillList
					includeAll={true}
					options={toOptions}
					value={filterOptions.to}
					onSelect={(to: string) =>
						onChange({
							...filterOptions,
							from: null,
							to,
						})
					}
				/>
			</FilterRow>

			{fromOptions.length > 1 && (
				<FilterRow label="From">
					<PillList
						includeAll={true}
						options={fromOptions}
						value={filterOptions.from}
						onSelect={(from: string) =>
							onChange({
								...filterOptions,
								from,
							})
						}
					/>
				</FilterRow>
			)}
		</dl>
	);
};
