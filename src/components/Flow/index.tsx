import { FunctionalComponent } from 'preact';
import style from './style.module.css';

export const Flow: FunctionalComponent<{
	component?: string;
	[attr: string]: any;
}> = ({ children, component: Component = 'div', ...rest }) => (
	<Component class={style.flow} {...rest}>
		{children}
	</Component>
);
