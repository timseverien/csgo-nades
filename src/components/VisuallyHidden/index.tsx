import { FunctionComponent } from 'preact';
import style from './style.module.css';

export const VisuallyHidden: FunctionComponent<{ component?: string }> = ({
	children,
	component: Component = 'div',
}) => {
	return <Component class={style.visuallyHidden}>{children}</Component>;
};
