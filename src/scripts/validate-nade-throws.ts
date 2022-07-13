import { groupBy, keys, pickBy } from 'lodash';
import { NadeThrowTechnique, TickRate } from '../NadeThrow';
import { nadeThrows } from '../nadeThrows';

const errors: string[] = [];

/*
 * 1. Check for duplicate IDs
 */

const ids = nadeThrows.map((n) => n.id);
const idsDouble = keys(pickBy(groupBy(ids), (x) => x.length > 1));

if (idsDouble.length > 0) {
	errors.push(
		`Found duplicate IDs in nade throws:\n${idsDouble.map((id) => ` - ${id}`).join('\n')}`,
	);
}

/*
 * 2. Check wheter all non-jump nades have TickRate.any set
 */

for (const nade of nadeThrows) {
	if (nade.technique !== NadeThrowTechnique.JumpThrow && nade.tickRate !== TickRate.any) {
		errors.push(
			`Nade ${nade.id} is not a jump throw and should have the tickrate set to 'TickRate.any' instead of ${nade.tickRate}`,
		);
	}
}

if (errors.length > 0) {
	errors.forEach((e) => console.error(e));
	process.exit(1);
}
