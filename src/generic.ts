export type NonEmptyArray<T> = [T, ...T[]];

export type Angle3D = [number, number, number];
export type Coordinate3D = [number, number, number];

export interface ImageSource {
	type: 'image/jpg' | 'image/webp';
	url: string;
}

export interface VideoSource {
	type: 'video/mp4';
	url: string;
}
