function identity<T>(value: T): T {
		return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));

function getFirst<T>(arr: T[]): T | undefined{
	return arr[0];
}
console.log(getFirst<number>([10, 20, 30]));

class Repository<T> {
	private items: T[] = [];

	add(item: T): void {
		this.items.push(item);
	}

	remove(item: T): void {
		this.items = this.items.filter(i => i !== item);
	}

	getAll(): T[] {
		return this.items;
	}
}

interface ApiResponse<T> {
	data: T;
	error?: string;
}

