class ListNode<T> {
	value: T | null;
	next: ListNode<T> | null;
	prev: ListNode<T> | null;
	constructor(value: T, next?: ListNode<T> | null, prev?: ListNode<T> | null) {
		this.value = value;
		this.next = next || null;
		this.prev = prev || null;
	}
};

export class DoublyLinkedList<T> {
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
		newNode.next = this.head;
		newNode.prev = null;

		if (!this.head) {
			this.tail = newNode; // 리스트가 비어있다면, tail도 새 노드로 설정
		} else {
			this.head.prev = newNode; // 기존 head의 prev를 새 노드로 설정
		}

		this.head = newNode;
		this.size++;
	}

	addToTail(value: T): void {
		const newNode = new ListNode(value);
		newNode.next = null;

		if (!this.tail) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}

		this.tail = newNode;
		this.size++;
	}

	// addToTailwithoutTail(value: T): void {
	// 	const newNode = new ListNode(value);
	// 	newNode.next = null;
	// 	let lastNode = this.head;

	// 	if (!lastNode) {
	// 		newNode.prev = null;
	// 		this.head = newNode;
	// 		this.size++;
	// 		return;
	// 	}

	// 	while (lastNode.next) {
	// 		lastNode = lastNode.next;
	// 	}

	// 	lastNode.next = newNode;
	// 	newNode.prev = lastNode;
	// 	this.size++;
	// }

	addAt(value: T, index: number): void {
		if (!this.head) {
			console.error('List is empty');
			return;
		}
		if (index < 0 || index > this.size) {
			console.error('Index out of bounds');
			return;
		}

		if (index === 0) {
			this.addToHead(value);
			return;
		}
		if (index === this.size) {
			this.addToTail(value);
			return;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			if (!temp?.next) {
				console.error('Next node is null before reaching index');
				return;
			}
			temp = temp.next;
		}

		if (temp?.prev) {
			const newNode = new ListNode(value);
			newNode.next = temp;
			newNode.prev = temp.prev;

			// 연결 갱신
			temp.prev.next = newNode;
			temp.prev = newNode;

			this.size++;
		} else {
			console.error('Node or prev node is null')
		}

	}

	reverse(): void {
		if (!this.head) return;

		let current: ListNode<T> | null = this.head;
		let prevNode: ListNode<T> | null = null;
		let nextNode: ListNode<T> | null = null;

		while (current) {
			nextNode = current.next; // 기존 연결을 저장

			// prev, next 교체	
			current.next = prevNode;
			current.prev = nextNode;

			// 포인터 이동
			prevNode = current;
			current = nextNode;
		}

		this.tail = this.head;
		this.head = prevNode;
	}

	printList(): string {
		let current = this.head;
		let result = '';

		while (current) {
			result += `${current.value} -> `;
			current = current.next;
		}

		return result + 'null';
	}

	getSize(): void {
		console.log(`size: ${this.size}`);
	}

}; 