import { FunctionalComponent } from 'preact';
import { ImageSource, NadeThrow } from '../../Nade';
import style from './style.module.css';

const WELL_SUPPORTED_TYPES = ['image/jpg', 'image/png'];

const ImageList: FunctionalComponent<{
	alt?: string;
	images: ImageSource[];
	[attr: string]: any;
}> = ({ images, alt = '', ...rest }) => {
	const imageFallback = images.find((image) => WELL_SUPPORTED_TYPES.includes(image.type));
	const imagesEnhanced = images.filter((image) => image !== imageFallback);

	return (
		<picture {...rest}>
			{imagesEnhanced.map((image) => (
				<>
					<source srcset={image.url} type={image.type} />
				</>
			))}

			{imageFallback && <img src={imageFallback.url} alt={alt} />}
		</picture>
	);
};

export const NadeImage: FunctionalComponent<{ nade: NadeThrow }> = ({ nade }) => (
	<div class={style.nadeImage}>
		<ImageList class={style.imagePoint} images={nade.throwPointImageUrl} />
		{nade.throwReleaseImageUrl && <ImageList images={nade.throwReleaseImageUrl} />}
		{/* <ImageList images={nade.throwLandImageUrl} /> */}
	</div>
);
