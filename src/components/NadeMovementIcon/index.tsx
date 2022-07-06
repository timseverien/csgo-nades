import { FunctionalComponent } from 'preact';
import { ThrowFlag } from '../../Nade';
import { formatText } from '../../features/filter/functions';
import { SvgIcon } from '../SvgIcon';

const arrowSvg =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1.635 1.365"><path d="M43.125 76.715a.15.15 0 0 0-.104.258l.272.273h-.959a.15.15 0 1 0 0 .299h.96l-.273.273a.15.15 0 1 0 .211.213l.53-.529a.15.15 0 0 0 0-.213l-.53-.53a.15.15 0 0 0-.107-.044Z" fill="currentColor" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:currentColor;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:currentColor;solid-opacity:1" transform="translate(-42.17 -76.715)"/></svg>';

const getRotation = (movement: ThrowFlag[]) => {
	const jump = movement.includes(ThrowFlag.jump);
	const move =
		movement.includes(ThrowFlag.movingBackwards) ||
		movement.includes(ThrowFlag.movingForward) ||
		movement.includes(ThrowFlag.movingLeft) ||
		movement.includes(ThrowFlag.movingRight);

	if (jump && move) {
		return -45;
	}

	if (jump) {
		return -90;
	}

	if (move) {
		return 0;
	}

	return null;
};

export const NadeMovementIcon: FunctionalComponent<{ movement: ThrowFlag[] }> = ({ movement }) => {
	const rotation = getRotation(movement);
	const formatter = new Intl.ListFormat('en', {
		style: 'narrow',
		type: 'conjunction',
	});

	return (
		<SvgIcon
			title={formatter.format(movement.map(formatText))}
			svg={arrowSvg}
			style={{
				fontWeight: 'bold',
				transform: `rotate(${rotation}deg)`,
			}}
		/>
	);
};
