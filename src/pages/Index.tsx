import { useState } from 'preact/hooks';
import { NadeItemList } from '../components/NadeItem';
import { NadeFilter } from '../features/filter/components/NadeFilter';
import { filterNadeListByNadeFilterResult } from '../features/filter/functions';
import nadeList from '../tricknades';

export function Index() {
	const [nadeFilter, setNadeFilter] = useState({
		location: null,
		map: 'de_mirage',
		target: null,
		tickRate: 64,
	});

	const nadeListResult = filterNadeListByNadeFilterResult(nadeList, nadeFilter);

	return (
		<main>
			<h1>Counter-Strike: Global Offensive nades</h1>

			<div style={{ marginBlockEnd: '4rem' }}>
				<NadeFilter nadeFilter={nadeFilter} nadeList={nadeList} onChange={setNadeFilter} />
			</div>

			<NadeItemList nades={nadeListResult} />
		</main>
	);
}
