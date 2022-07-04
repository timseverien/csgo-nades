import { ThrowFlag, ThrowStance, NadeThrow } from './Nade';

const nades: NadeThrow[] = [
  {
    map: 'de_mirage',
    tickRate: 64,
    location: {
      name: 'T-spawn',
      position: [0, 0, 0],
    },
    target: {
      name: 'short',
      position: [0, 0, 0],
    },
    throw: {
      movement: [
        ThrowFlag.jump,
        ThrowFlag.movingForward
      ],
      stance: ThrowStance.crouching,
    },
    throwAnimationUrl: '',
    throwPointImageUrl: '',
    throwReleaseImageUrl: '',
  },
  {
    map: 'de_mirage',
    tickRate: 64,
    location: {
      name: 'Stairs',
      position: [0, 0, 0],
    },
    target: {
      name: 'short',
      position: [0, 0, 0],
    },
    throw: {
      movement: [
        ThrowFlag.jump,
        ThrowFlag.movingForward
      ],
      stance: ThrowStance.crouching,
    },
    throwAnimationUrl: '',
    throwPointImageUrl: '',
    throwReleaseImageUrl: '',
  },
];

export default nades;
