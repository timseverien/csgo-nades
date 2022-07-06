import { FunctionalComponent } from 'preact';

export const SvgIcon: FunctionalComponent<{ svg: string; size?: number; [x: string]: any }> = ({
	size = 24,
	svg,
	...rest
}) => (
	<div
		{...rest}
		dangerouslySetInnerHTML={{
			__html: svg.replace('<svg xmlns', `<svg height="${size}" xmlns`),
		}}
	/>
);
