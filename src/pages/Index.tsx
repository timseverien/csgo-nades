import { useState } from 'preact/hooks';
import { Flow } from '../components/Flow';
import { Heading } from '../components/Heading';
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
			<Flow>
				<Heading>Counter-Strike: Global Offensive nades</Heading>
				<NadeFilter nadeFilter={nadeFilter} nadeList={nadeList} onChange={setNadeFilter} />
				<NadeItemList nades={nadeListResult} />
			</Flow>
		</main>
	);
}
