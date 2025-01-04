export class ListNode<T> {
	value: T;
	next: ListNode<T> | null;
	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
};

export class LinkedList<T> {
	head: ListNode<T> | null;
	tail: ListNode<T> | null;
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(value: T): void {
		const newNode = new ListNode(value);
		if (this.head) {
			newNode.next = this.head;
		}
		this.head = newNode;
	}

	printList(): void {
		let current = this.head;
		let result = '';

		while (current) {
			result += `${current.value} -> `;
			current = current.next;
		}
		result += 'null';
		const outputElement = document.getElementById("output");
		if (outputElement) {
			outputElement.textContent = result;
		}
	}

}; 