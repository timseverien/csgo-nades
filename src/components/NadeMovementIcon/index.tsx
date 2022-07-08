import { FunctionalComponent } from 'preact';
import { ThrowFlag } from '../../Nade';
import { formatText } from '../../features/filter/functions';
import { IconArrow } from '../Icon';
import { SvgIcon } from '../SvgIcon';

const getArrowDirection = (movement: ThrowFlag[]) => {
	const jump = movement.includes(ThrowFlag.jump);
	const move =
		movement.includes(ThrowFlag.movingBackwards) ||
		movement.includes(ThrowFlag.movingForward) ||
		movement.includes(ThrowFlag.movingLeft) ||
		movement.includes(ThrowFlag.movingRight);

	if (jump && move) {
		return 'ne';
	}

	if (jump) {
		return 'n';
	}

	if (move) {
		return 'e';
	}

	return null;
};

export const NadeMovementIcon: FunctionalComponent<{ movement: ThrowFlag[]; size?: number }> = ({
	movement,
	size = 24,
}) => {
	const direction = getArrowDirection(movement);
	const formatter = new Intl.ListFormat('en', {
		style: 'narrow',
		type: 'conjunction',
	});

	return (
		<IconArrow
			direction={direction}
			size={size}
			title={formatter.format(movement.map(formatText))}
		/>
	);
};
