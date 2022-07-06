import { FunctionalComponent } from 'preact';

export const Heading: FunctionalComponent<{ component?: string }> = ({
	children,
	component: Component = 'h1',
	...props
}) => <Component {...props}>{children}</Component>;
