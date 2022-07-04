type Position = [number, number, number];

export enum ThrowDifficulty {
  // allows some degree of error
  easy,
  // this probably requires several tries to get the feeling
  medium,
  // pixel perfect stuff; we should have none of these
  hard,
}

export enum ThrowFlag {
  jump = 'jump',
  movingBackwards = 'move backwards',
  movingForward = 'move forwards',
  movingLeft = 'move left',
  movingRight = 'move right',
}

export enum ThrowStance {
  crouching = 'crouching',
  standing = 'standing',
}

// TODO: infer location/target name based on position?
export interface NadeThrow {
  map: string;
  throwAnimationUrl: string;
  throwPointImageUrl: string;
  throwReleaseImageUrl?: string;
  tickRate: number;

  location: {
    name: string;
    position: Position;
  };

  target: {
    name: string;
    position: Position;
  },

  throw: {
    movement: ThrowFlag[];
    stance: ThrowStance;
  };
}