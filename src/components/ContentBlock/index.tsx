import { FunctionalComponent } from 'preact';
import style from './style.module.css';

export const ContentBlock: FunctionalComponent<{ component?: string }> = ({
	children,
	component: Component = 'div',
}) => <Component class={style.container}>{children}</Component>;
