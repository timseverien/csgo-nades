import { FunctionalComponent, createRef } from 'preact';
import { NadeThrow, ThrowFlag } from '../../Nade';
import { formatLocation, formatText } from '../../features/filter/functions';
import { Card } from '../Card';
import { NadeMovementIcon } from '../NadeMovementIcon';
import { NadeStanceIcon } from '../NadeStanceIcon';
import styles from './style.module.css';

export const NadeItem: FunctionalComponent<{ nade: NadeThrow }> = ({ nade }) => {
	const listFormatter = new Intl.ListFormat('en', {
		style: 'narrow',
		type: 'conjunction',
	});

	return (
		<div>
			<dl>
				<dt>From</dt>
				<dd>{nade.location.name}</dd>

				<dt>To</dt>
				<dd>{nade.target.name}</dd>

				<dt>Stance</dt>
				<dd>{nade.throw.stance}</dd>

				<dt>Movement</dt>
				<dd>{listFormatter.format(nade.throw.movement)}</dd>
			</dl>

			<img src={nade.throwPointImageUrl} />
			<img src={nade.throwReleaseImageUrl} />

			<video controls loop height="360" width="640">
				{nade.throwAnimationUrl.map((source) => {
					<source src={source} type={source.type} />;
				})}
			</video>
		</div>
	);
};

export const NadeItemPreview: FunctionalComponent<{
	nade: NadeThrow;
}> = ({ nade }) => {
	const listFormatter = new Intl.ListFormat('en', {
		style: 'narrow',
		type: 'conjunction',
	});

	const videoReference = createRef();

	return (
		<Card
			header={
				<>
					<video
						ref={videoReference}
						controls
						loop
						height="360"
						width="640"
						onMouseOver={() => videoReference.current.play()}
					>
						{nade.throwAnimationUrl.map((source) => (
							<source src={source.url} type={source.type} />
						))}
					</video>

					<div
						style={{
							display: 'flex',
							flexFlow: 'row nowrap',
							padding: '1rem',
							color: '#fff',
							fontSize: '2rem',
							lineHeight: '2rem',
							backgroundColor: 'var(--color-primary)',
							position: 'absolute',
							right: '0',
							top: '0',
							borderBottomLeftRadius: '1rem',
							boxShadow: 'var(--elevation-2)',
						}}
					>
						<NadeStanceIcon height="32" stance={nade.throw.stance} />
						<NadeMovementIcon movement={nade.throw.movement} />
					</div>
				</>
			}
		>
			<dl
				style={{
					margin: 0,
				}}
			>
				<dt>Location</dt>
				<dd>
					{formatLocation(nade.location.name)} → {formatLocation(nade.target.name)}
				</dd>
			</dl>
		</Card>

		// <div class={styles.preview}>

		// 	<div class={styles.imageContainer}>
		// 		{/* <img src={nade.throwPointImageUrl} />
		// 		{nade.throwReleaseImageUrl && <img src={nade.throwReleaseImageUrl} />} */}
		// 	</div>
		// </div>
	);
};

export const NadeItemList: FunctionalComponent<{ nades: NadeThrow[] }> = ({ nades }) => (
	<>
		{nades.length > 0 && (
			<ul class={styles.itemList}>
				{nades.map((nade) => (
					<NadeItemPreview key={nade.throwAnimationUrl.at(0).url} nade={nade} />
				))}
			</ul>
		)}
	</>
);
