import { groupBy, keys, pickBy } from 'lodash';
import { nadeThrows } from '../nadeThrows';

const ids = nadeThrows.map((n) => n.id);
const idsDouble = keys(pickBy(groupBy(ids), (x) => x.length > 1));

if (idsDouble.length > 0) {
	console.error(
		'Found duplicate IDs in nade throws:\n',
		idsDouble.map((id) => ` - ${id}`).join('\n'),
	);

	process.exit(1);
}
