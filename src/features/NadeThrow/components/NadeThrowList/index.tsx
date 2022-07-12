import { FunctionalComponent } from 'preact';
import { NadeThrow } from '../../../../NadeThrow';
import { NadeThrowCard } from '../NadeThrowCard';
import style from './style.module.css';

export const NadeThrowList: FunctionalComponent<{ nades: NadeThrow[] }> = ({ nades }) => {
	return (
		<ul class={style.list}>
			{nades.map((nade) => (
				<li key={nade.id}>
					<NadeThrowCard nade={nade} />
				</li>
			))}
		</ul>
	);
};
