import { FunctionalComponent } from 'preact';

export const SvgIcon: FunctionalComponent<{
	component?: string;
	size?: number;
	style?: object;
	svg: string;
	[attr: string]: any;
}> = ({ component: Component = 'span', size = 16, svg, style = {}, ...rest }) => (
	<Component
		{...rest}
		dangerouslySetInnerHTML={{
			__html: svg.replace('<svg xmlns', `<svg width="${size}" height="${size}" xmlns`),
		}}
		style={{
			display: 'inline-block',
			height: `${size}px`,
			width: `${size}px`,
			...style,
		}}
	/>
);
