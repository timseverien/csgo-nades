import { Component, FunctionalComponent } from 'preact';
import style from './style.module.css';

export const Card: FunctionalComponent<{
	header?: Component;
}> = ({ children, header }) => {
	return (
		<div class={style.card}>
			{header}
			<div class={style.content}>{children}</div>
		</div>
	);
};

export const SimpleCard: FunctionalComponent = ({ children }) => {
	return <div class={style.card}>{children}</div>;
};
