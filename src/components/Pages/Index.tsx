import { useState } from 'preact/hooks';
import { TickRate } from '../../NadeThrow';
import { NadeThrowList } from '../../features/NadeThrow/components/NadeThrowList';
import { NadeThrowFilter } from '../../features/NadeThrowFilter/components/NadeThrowFilter';
import { filterNadeListByNadeFilterResult } from '../../features/NadeThrowFilter/functions';
import { NadeThrowFilterOptions } from '../../features/NadeThrowFilter/types';
import { nadeThrows } from '../../nadeThrows';
import { Flow } from '../Flow';
import { VisuallyHidden } from '../VisuallyHidden';

export function Index() {
	const [filterOptions, setNadeFilter] = useState<NadeThrowFilterOptions>({
		from: null,
		map: 'de_mirage',
		tickRate: TickRate.low,
		to: null,
	});

	const nadeThrowsFiltered = filterNadeListByNadeFilterResult(nadeThrows, filterOptions);

	return (
		<main>
			<VisuallyHidden component="h1">Counter-Strike: Global Offensive nades</VisuallyHidden>

			<Flow>
				<NadeThrowFilter
					filterOptions={filterOptions}
					nadeList={nadeThrows}
					onChange={setNadeFilter}
				/>
				<NadeThrowList nades={nadeThrowsFiltered} />
			</Flow>
		</main>
	);
}
