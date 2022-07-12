import { capitalize } from 'lodash';
import { FunctionalComponent } from 'preact';
import {
	NadeThrow,
	NadeThrowTechnique,
	getNadeLineupImageSources,
	getNadeLineupReleaseImageSources,
	getNadeVideoSources,
	isMovingNadeThrow,
} from '../../../../NadeThrow';
import { Card } from '../../../../components/Card';
import { IconArrow } from '../../../../components/Icon';
import { Image, Video } from '../../../../components/MediaSource';
import { Pill, PillVariant } from '../../../../components/Pill';
import { VisuallyHidden } from '../../../../components/VisuallyHidden';
import { ImageSource, NonEmptyArray, VideoSource } from '../../../../generic';
import style from './style.module.css';

const TYPE_INSTRUCTION_MAPPING: Map<NadeThrow['__type'], string> = new Map([
	['stationary', 'stand still'],
	['moving', 'run'],
]);

const TECHNIQUE_INTSTRUCTION_MAPPING = {
	[NadeThrowTechnique.JumpThrow]: 'jump throw',
	[NadeThrowTechnique.MouseLeft]: 'press left mouse',
};

function createInstructions(listFormatter: Intl.ListFormat, nade: NadeThrow): string {
	const instructions = [
		TYPE_INSTRUCTION_MAPPING.get(nade.__type),
		TECHNIQUE_INTSTRUCTION_MAPPING[nade.technique],
	].filter((i) => typeof i === 'string') as string[];

	return capitalize(listFormatter.format(instructions));
}

const Layout: FunctionalComponent = ({ children }) => <div class={style.layout}>{children}</div>;

const LineupImage: FunctionalComponent<{
	images: ImageSource[];
	text: string;
	variant?: 'large';
	[attr: string]: any;
}> = ({ images, text, variant, ...attrs }) => {
	const instructionImageClass =
		variant === 'large'
			? `${style.instructionImage} ${style.instructionImageLarge}`
			: style.instructionImage;

	return (
		<div {...attrs} class={instructionImageClass}>
			<Image sources={images as NonEmptyArray<ImageSource>} />
			<span class={style.instructionText}>
				<Pill variant={PillVariant.contained}>{text}</Pill>
			</span>
		</div>
	);
};

export const NadeThrowCard: FunctionalComponent<{ nade: NadeThrow }> = ({ nade }) => {
	const videos = getNadeVideoSources(nade);
	const lineupImages = getNadeLineupImageSources(nade);
	const lineupReleaseImages = isMovingNadeThrow(nade) ? getNadeLineupReleaseImageSources(nade) : [];

	if (videos.length === 0) {
		return null;
	}

	const lineupImageVariant = lineupReleaseImages.length === 0 ? 'large' : undefined;

	const cardHeader = (
		<Layout>
			<Video controls loop class={style.video} sources={videos as NonEmptyArray<VideoSource>} />
			<LineupImage text="Lineup" variant={lineupImageVariant} images={lineupImages} />
			{lineupReleaseImages.length > 0 && (
				<LineupImage text="Release" images={lineupReleaseImages} />
			)}
		</Layout>
	);

	const listFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

	return (
		<Card header={cardHeader}>
			<dl>
				<VisuallyHidden component="dt">Location</VisuallyHidden>
				<dd>
					{nade.from.name} <IconArrow title="to" size={12} /> {nade.to.name}
				</dd>

				<VisuallyHidden component="dt">Technique</VisuallyHidden>
				<dd>{createInstructions(listFormatter, nade)}</dd>
			</dl>
		</Card>
	);
};
