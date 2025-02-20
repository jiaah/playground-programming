class ListNode<T> {
	value: T | null;
	next: ListNode<T> | null;

	constructor(value: T, next?: ListNode<T> | null) {
		this.value = value;
		this.next = next || null;
	}
};

export class CircularLinkedList<T> {
	head: ListNode<T> | null;
	tail: ListNode<T> | null;
	size: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	addToHead(value: T): void {
		const newNode = new ListNode(value);

		if (!this.head || !this.tail) {
			this.head = this.tail = newNode;
			this.tail.next = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
			this.tail.next = this.head;
		}
		this.size++;
	}

	addToTail(value: T): void {
		const newNode = new ListNode(value);

		if (!this.head || !this.tail) {
			this.head = this.tail = newNode;
			this.tail.next = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
			this.tail.next = this.head;
		}
		this.size++;
	}

	addAfter(value: T, index: number): void {
		if (!this.head) {
			console.error('List is empty');
			return;
		}
		if (index < 0 || index >= this.size) {
			console.error('Index out of bounds');
			return;
		}

		if (index === this.size - 1) {
			this.addToTail(value);
			return;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {

			if (!temp?.next) {
				console.error('List is unexpectedly unlinked.');
				return;
			}
			temp = temp.next;
		}

		const newNode = new ListNode(value, temp.next);
		temp.next = newNode;
		this.size++;
	}

	printList(): string {
		if (!this.head) {
			console.error('List is empty');
			return '';
		}

		let current = this.head;
		let result = '';

		do {
			result += `${current.value} -> `;

			if (!current.next) {
				console.error('List is unexpectedly unlinked.');
				return '';
			} else {
				current = current.next;
			}
		}
		while (current !== this.head);
		return result;
	}

	getSize(): void {
		console.log(`size: ${this.size}`);
	}

}; 