import { FunctionalComponent, createRef } from 'preact';
import { NadeThrow, ThrowFlag } from '../../Nade';
import { formatLocation, formatText } from '../../features/filter/functions';
import { Card, SimpleCard } from '../Card';
import { Flow } from '../Flow';
import { IconArrow } from '../Icon';
import { NadeImage } from '../NadeImage';
import { NadeMovementIcon } from '../NadeMovementIcon';
import { NadeStanceIcon } from '../NadeStanceIcon';
import { SvgIcon } from '../SvgIcon';
import { VisuallyHidden } from '../VisuallyHidden';
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
	const movementFormatter = new Intl.ListFormat('en', {
		style: 'short',
		type: 'conjunction',
	});

	const videoReference = createRef();

	return (
		<SimpleCard>
			<div class={styles.previewHeader}>
				<video
					class={styles.previewVideo}
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

				<div class={styles.previewInstructions}>
					<div class={styles.previewControls}>
						<NadeStanceIcon size={24} stance={nade.throw.stance} />
						<div>{nade.throw.stance}</div>

						<NadeMovementIcon size={24} movement={nade.throw.movement} />
						<div>{movementFormatter.format(nade.throw.movement)}</div>
					</div>

					<div class={styles.previewImages}>
						<NadeImage nade={nade} />
					</div>
				</div>
			</div>
			{/* <dl
				style={{
					margin: 0,
				}}
			>
				<VisuallyHidden component="dt">Location</VisuallyHidden>
				<dd>
					{formatLocation(nade.location.name)} <IconArrow title="to" />{' '}
					{formatLocation(nade.target.name)}
				</dd>
			</dl> */}
		</SimpleCard>

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
