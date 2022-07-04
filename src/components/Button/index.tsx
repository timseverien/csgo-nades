import { FunctionalComponent, JSX } from 'preact';

import styles from './style.module.css';

export const Button: FunctionalComponent<JSX.HTMLAttributes> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export const ButtonUnstyled: FunctionalComponent<JSX.HTMLAttributes> = ({ children, ...props }) => {
	return (
		<button class={styles.unstyled} {...props}>
			{children}
		</button>
	);
};
