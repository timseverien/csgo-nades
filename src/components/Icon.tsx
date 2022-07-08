import { FunctionalComponent } from 'preact';
import { SvgIcon } from './SvgIcon';

const svgArrowE =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1.635 1.365"><path d="M43.125 76.715a.15.15 0 0 0-.104.258l.272.273h-.959a.15.15 0 1 0 0 .299h.96l-.273.273a.15.15 0 1 0 .211.213l.53-.529a.15.15 0 0 0 0-.213l-.53-.53a.15.15 0 0 0-.107-.044Z" fill="currentColor" transform="translate(-42.17 -76.715)"/></svg>';

const svgArrowNe =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1.635 1.635"><path d="M.432.24a.15.15 0 0 0 .11.256h.385l-.678.679a.15.15 0 1 0 .211.211l.679-.678v.386a.15.15 0 1 0 .3.001V.346a.15.15 0 0 0-.15-.15h-.75A.15.15 0 0 0 .432.24z" fill="currentColor"/></svg>';

function getArrowSvg(direction) {
	switch (direction) {
		case 'ne':
			return svgArrowNe;
		default:
			return svgArrowE;
	}
}

export const IconArrow: FunctionalComponent<{
	component?: string;
	direction?: string;
	size?: number;
	title: string;
	[attr: string]: any;
}> = ({ component = 'span', direction = 'e', size = 16, title, ...rest }) => {
	const svg = getArrowSvg(direction);

	return <SvgIcon component={component} size={size} title={title} svg={svg} {...rest} />;
};
