import { FunctionComponent } from 'preact';
import styles from './styles.module.css';

export const VisuallyHidden: FunctionComponent<{ component?: string }> = ({
	children,
	component: Component = 'div',
}) => {
	return <Component class={styles.visuallyHidden}>{children}</Component>;
};
