import { FunctionalComponent } from 'preact';
import { ThrowFlag } from '../../Nade';
import { formatText } from '../../features/filter/functions';

const getSymbol = (movement: ThrowFlag[]) => {
	const jump = movement.includes(ThrowFlag.jump);
	const move =
		movement.includes(ThrowFlag.movingBackwards) ||
		movement.includes(ThrowFlag.movingForward) ||
		movement.includes(ThrowFlag.movingLeft) ||
		movement.includes(ThrowFlag.movingRight);

	if (jump && move) {
		return '→';
	}

	if (jump) {
		return '↑';
	}

	if (move) {
		return '→';
	}

	return null;
};

export const NadeMovementIcon: FunctionalComponent<{ movement: ThrowFlag[] }> = ({ movement }) => {
	const symbol = getSymbol(movement);
	const formatter = new Intl.ListFormat();

	return (
		<span
			title={formatter.format(movement.map(formatText))}
			style={{
				fontWeight: 'bold',
			}}
		>
			{symbol}
		</span>
	);
};
