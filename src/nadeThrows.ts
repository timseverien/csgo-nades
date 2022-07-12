import { NadeThrow, NadeThrowDifficulty, NadeThrowTechnique } from './NadeThrow';

export const nadeThrows: NadeThrow[] = [
	{
		__type: 'stationary',
		id: 'de_mirage-64-ct-spawn-to-palace',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'CT spawn',
			position: [0, 0, 0],
		},
		to: {
			name: 'Palace',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-ct-spawn-to-ramp',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'CT spawn',
			position: [0, 0, 0],
		},
		to: {
			name: 'Ramp',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'moving',
		id: 'de_mirage-64-t-spawn-to-bench',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		fromRelease: [0, 0, 0],
		to: {
			name: 'Bench',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-t-spawn-to-connector',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		to: {
			name: 'Connector',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-t-spawn-to-ct',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		to: {
			name: 'CT spawn',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-t-spawn-to-jungle',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		to: {
			name: 'Jungle',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'moving',
		id: 'de_mirage-64-t-spawn-to-shops-door',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		fromRelease: [0, 0, 0],
		to: {
			name: 'Shops (door)',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'moving',
		id: 'de_mirage-64-t-spawn-to-shops-window',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		fromRelease: [0, 0, 0],
		to: {
			name: 'Shops (window)',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-t-spawn-to-short',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		to: {
			name: 'Short',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'moving',
		id: 'de_mirage-64-t-spawn-to-window',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		fromRelease: [0, 0, 0],
		to: {
			name: 'Window',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-top-mid-to-b-site',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Top mid',
			position: [0, 0, 0],
		},
		to: {
			name: 'Short',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-top-mid-to-firebox',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Top mid',
			position: [0, 0, 0],
		},
		to: {
			name: 'A (firebox)',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-top-mid-to-short',
		map: 'de_mirage',
		tickRate: 64,
		difficulty: NadeThrowDifficulty.hard,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Top mid',
			position: [0, 0, 0],
		},
		to: {
			name: 'Short',
			position: [0, 0, 0],
		},
	},
];
