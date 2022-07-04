type Accessor<A, B> = (object: A) => B;

function noop(x: any): any {
	return x;
}

export function getUniqueProperty<A, B>(list: A[], accessor: Accessor<A, B> = noop) {
	const result = [];

	for (const item of list) {
		const value: B = accessor(item);

		if (result.some((i) => i === value)) {
			continue;
		}

		result.push(value);
	}

	return result;
}
