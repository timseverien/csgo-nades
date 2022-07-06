import { Component, FunctionalComponent } from 'preact';
import style from './style.module.css';

export const Card: FunctionalComponent<{
	header?: Component;
}> = ({ children, header }) => {
	return (
		<div class={style.card}>
			{header && <div class={style.header}>{header}</div>}
			<div class={style.content}>{children}</div>
		</div>
	);
};
