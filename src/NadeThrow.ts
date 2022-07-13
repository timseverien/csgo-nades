import { ImageSource, VideoSource } from './generic';

export enum TickRate {
	any = 0,
	low = 64,
	high = 128,
}

export enum NadeThrowDifficulty {
	easy = 'easy',
	medium = 'medium',
	hard = 'hard',
}

export enum NadeThrowTechnique {
	JumpThrow = 'jumpThrow',
	MouseLeft = 'mouseLeft',
}

interface NadeThrowBase {
	id: string;
	difficulty: NadeThrowDifficulty;
	map: string;
	technique: NadeThrowTechnique;
	tickRate: TickRate;
	to: string;
	from: string;
}

interface Moving {
	__type: 'moving';
}

interface Stationary {
	__type: 'stationary';
}

export type MovingNadeThrow = NadeThrowBase & Moving;
export type StationaryNadeThrow = NadeThrowBase & Stationary;
export type NadeThrow = MovingNadeThrow | StationaryNadeThrow;

export function getNadeVideoSources(nade: NadeThrow): VideoSource[] {
	return [
		{
			type: 'video/mp4',
			url: `nades/${nade.id}.mp4`,
		},
	];
}

export function getNadeLineupImageSources(nade: NadeThrow): ImageSource[] {
	const fileName = `${nade.id}-lineup`;

	return [
		{
			type: 'image/jpg',
			url: `nades/${fileName}.jpg`,
		},
		{
			type: 'image/webp',
			url: `nades/${fileName}.webp`,
		},
	];
}

export function getNadeLineupReleaseImageSources(nade: MovingNadeThrow): ImageSource[] {
	const fileName = `${nade.id}-release`;

	return [
		{
			type: 'image/jpg',
			url: `nades/${fileName}.jpg`,
		},
		{
			type: 'image/webp',
			url: `nades/${fileName}.webp`,
		},
	];
}

export function getTickRateByNumber(n: number): TickRate {
	switch (n) {
		case 64:
			return TickRate.low;
		case 128:
			return TickRate.high;
		default:
			return TickRate.any;
	}
}

export function isMovingNadeThrow(nade: NadeThrow): nade is MovingNadeThrow {
	return nade.__type === 'moving';
}

export function isStationaryNadeThrow(nade: NadeThrow): nade is StationaryNadeThrow {
	return nade.__type === 'stationary';
}
