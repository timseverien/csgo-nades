import { FunctionalComponent } from 'preact';
import { ImageSource, NonEmptyArray, VideoSource } from '../generic';

export const Image: FunctionalComponent<{
	alt?: string;
	sources: NonEmptyArray<ImageSource>;
	[key: string]: any;
}> = ({ alt = '', sources, ...attrs }) => {
	const isFallbackInSources = sources.some((s) => s.type === 'image/jpg');

	const fallbackSource = isFallbackInSources
		? sources.find((s) => s.type === 'image/jpg')
		: sources[0];

	const enhanceSources = sources.filter((s) => s !== fallbackSource);

	return (
		<picture {...attrs}>
			{enhanceSources.map((s) => (
				<source src={s.url} type={s.type} />
			))}
			<img src={fallbackSource?.url} alt={alt} />
		</picture>
	);
};

export const Video: FunctionalComponent<{
	sources: NonEmptyArray<VideoSource>;
	[key: string]: any;
}> = ({ sources, ...attrs }) => {
	return (
		<video {...attrs}>
			{sources.map((s) => (
				<source src={s.url} type={s.type} />
			))}
		</video>
	);
};
