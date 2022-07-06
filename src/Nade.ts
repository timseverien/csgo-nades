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
	movingBackwards = 'move backward',
	movingForward = 'move forward',
	movingLeft = 'move left',
	movingRight = 'move right',
}

export enum ThrowStance {
	crouching = 'crouching',
	standing = 'standing',
}

interface ImageSource {
	url: string;
	type: 'image/jpg' | 'image/webp';
}

interface VideoSource {
	url: string;
	type: 'video/mp4';
}

// TODO: infer location/target name based on position?
export interface NadeThrow {
	map: string;
	throwAnimationUrl: VideoSource[];
	throwPointImageUrl: ImageSource[];
	throwReleaseImageUrl?: ImageSource[];
	tickRate: number;

	location: {
		name: string;
		position: Position;
	};

	target: {
		name: string;
		position: Position;
	};

	throw: {
		movement: ThrowFlag[];
		stance: ThrowStance;
	};
}
