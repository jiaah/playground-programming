export class ListNode<T> {
	value: T | null;
	next: ListNode<T> | null;
	constructor(value: T, next?: ListNode<T> | null) {
		this.value = value;
		this.next = next || null;
	}
};

export class LinkedList<T> {
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
		if (this.head) {
			newNode.next = this.head;
		}
		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}
		this.size++;
	}

	addToTail(value: T): void {
		const newNode = new ListNode(value);
		if (this.tail) {
			this.tail.next = newNode;
		}
		this.tail = newNode;

		if (!this.head) {
			this.head = newNode;
		}
		this.size++;
	}

	/**
	 * [10] -> [20] -> [30] -> null
	 * addAfter(value, 0): [10] -> [value] -> [20] -> [30] -> null
	 * addAfter(value, 1): [10] -> [20] -> [value] -> [30] -> null
	 * addAfter(value, 2): [10] -> [20] -> [30] -> [value] -> null
	 */
	addAfter(value: T, index: number): void {
		if (index < 0 || index > this.size) {
			console.error('Index out of bounds');
			return;
		}

		if (!this.head) {
			console.error('List is empty');
			return;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next as ListNode<T>
		}

		const newNode = new ListNode(value, temp.next); // 새로운 노드 생성 + 새 노드의 next를 현재 노드의 next로 연결
		temp.next = newNode; // 현재 노드의 next를 새 노드로 연결
		this.size++;
	}

	printList(): void {
		let current = this.head;
		let result = '';

		while (current) {
			result += `${current.value} -> `;
			current = current.next;
		}
		result += 'null';
		console.log(result);
		const outputElement = document.getElementById("output");
		if (outputElement) {
			outputElement.textContent = result;
		}
	}

	getSize(): void {
		const sizeElement = document.getElementById("size");
		if (sizeElement) {
			sizeElement.textContent = `Size: ${this.size}`;
		}
	}

}; 