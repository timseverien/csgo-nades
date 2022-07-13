import { NadeThrow, NadeThrowDifficulty, NadeThrowTechnique, TickRate } from './NadeThrow';

export const nadeThrows: NadeThrow[] = [
	{
		__type: 'stationary',
		id: 'de_mirage-64-back-alley-to-bench',
		map: 'de_mirage',
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Back alley',
			position: [0, 0, 0],
		},
		to: {
			name: 'Bench',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-back-alley-to-bench-2',
		map: 'de_mirage',
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Back alley',
			position: [0, 0, 0],
		},
		to: {
			name: 'Bench',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-back-alley-to-connector',
		map: 'de_mirage',
		tickRate: TickRate.any,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.MouseLeft,

		lineup: [0, 0, 0],
		from: {
			name: 'Back alley',
			position: [0, 0, 0],
		},
		to: {
			name: 'Connector',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-back-alley-to-van',
		map: 'de_mirage',
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Back alley',
			position: [0, 0, 0],
		},
		to: {
			name: 'Van',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-back-alley-to-short',
		map: 'de_mirage',
		tickRate: TickRate.any,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.MouseLeft,

		lineup: [0, 0, 0],
		from: {
			name: 'Back alley',
			position: [0, 0, 0],
		},
		to: {
			name: 'Short',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-back-alley-to-shops-window',
		map: 'de_mirage',
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.easy,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Back alley',
			position: [0, 0, 0],
		},
		to: {
			name: 'Shops (window)',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-ct-spawn-to-palace',
		map: 'de_mirage',
		tickRate: TickRate.low,
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
		tickRate: TickRate.low,
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
		__type: 'stationary',
		id: 'de_mirage-64-t-roof-to-a-site',
		map: 'de_mirage',
		tickRate: TickRate.any,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.MouseLeft,

		lineup: [0, 0, 0],
		from: {
			name: 'T roof',
			position: [0, 0, 0],
		},
		to: {
			name: 'A site',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'moving',
		id: 'de_mirage-64-t-spawn-to-a-site',
		map: 'de_mirage',
		tickRate: TickRate.any,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'T spawn',
			position: [0, 0, 0],
		},
		fromRelease: [0, 0, 0],
		to: {
			name: 'A site',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'moving',
		id: 'de_mirage-64-t-spawn-to-bench',
		map: 'de_mirage',
		tickRate: TickRate.low,
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
		tickRate: TickRate.low,
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
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.easy,
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
		tickRate: TickRate.low,
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
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.medium,
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
		tickRate: TickRate.low,
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
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.medium,
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
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.medium,
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
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.medium,
		technique: NadeThrowTechnique.JumpThrow,

		lineup: [0, 0, 0],
		from: {
			name: 'Top mid',
			position: [0, 0, 0],
		},
		to: {
			name: 'B (site)',
			position: [0, 0, 0],
		},
	},
	{
		__type: 'stationary',
		id: 'de_mirage-64-top-mid-to-firebox',
		map: 'de_mirage',
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.medium,
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
		tickRate: TickRate.low,
		difficulty: NadeThrowDifficulty.easy,
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
