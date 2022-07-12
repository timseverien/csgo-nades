import * as glob from 'glob';
import * as path from 'path';
import * as sharp from 'sharp';

const [directorySource, directoryDestination, targetSize] = process.argv.slice(2);
const [targetWidth, targetHeight] = targetSize.split('x').map((n) => Number.parseInt(n, 10));

const sourceFiles = glob.sync(`${directorySource}/*.png`);

(async () => {
	const tasks = sourceFiles.map(async (sourceFile) => {
		const fileName = path.basename(sourceFile, path.extname(sourceFile));
		const image = sharp(sourceFile);
		const meta = await image.metadata();

		if (meta.width === undefined || meta.height === undefined) {
			throw new Error('Cannot obtain image height and width');
		}

		const cropX = 0.5 * (meta.width - targetWidth);
		const cropY = 0.5 * (meta.height - targetHeight);

		const imageCropped = image.extract({
			left: cropX,
			top: cropY,
			width: targetWidth,
			height: targetHeight,
		});

		console.log(`Optimizing ${fileName}`);

		await Promise.all([
			new Promise<void>((resolve, reject) =>
				imageCropped
					.jpeg({ quality: 70 })
					.toFile(path.resolve(directoryDestination, `${fileName}.jpg`), (error) =>
						error ? reject(error) : resolve(),
					),
			),

			new Promise<void>((resolve, reject) =>
				imageCropped
					.webp({ effort: 6, quality: 70 })
					.toFile(path.resolve(directoryDestination, `${fileName}.webp`), (error) =>
						error ? reject(error) : resolve(),
					),
			),
		]);
	});

	await Promise.all(tasks);
})();
