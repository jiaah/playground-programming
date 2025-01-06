class ListNode<T> {
	value: T | null;
	next: ListNode<T> | null;
	constructor(value: T, next?: ListNode<T> | null) {
		this.value = value;
		this.next = next || null;
	}
};

export class SinglyLinkedList<T> {
	head: ListNode<T> | null;
	tail: ListNode<T> | null;
	size: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	getNode(index: number): ListNode<T> | null {
		if (index < 0 || index >= this.size) {
			console.error('Index out of bounds');
			return null;
		}

		if (!this.head) {
			console.error('List is empty');
			return null;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next as ListNode<T>
		}
		return temp;
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

	addAfter(value: T, index: number): void {
		const targetNode = this.getNode(index);

		if (!targetNode) {
			console.error('Node not found at the given index');
			return;
		}

		const newNode = new ListNode(value, targetNode.next); // 새로운 노드 생성 + 새 노드의 next를 현재 노드의 next로 연결
		targetNode.next = newNode; // 현재 노드의 next를 새 노드로 연결
		this.size++;
	}

	deleteFirst(): void {
		if (!this.head) {
			console.error('List is empty');
			return;
		}
		this.head = this.head.next;

		if (!this.head) {
			this.tail = null;
		};
		this.size--;
	}

	deleteLast(): void {
		if (this.size === 0) {
			console.error('List is empty');
			return;
		}
		if (this.size <= 1) {
			return this.deleteFirst();
		}

		const secondLast = this.getNode(this.size - 2);
		if (!secondLast) {
			console.error('Error finding second to last node');
			return;
		}

		this.tail = secondLast;
		this.tail.next = null;
		this.size--;
	}

	delete(index: number): void {
		if (index < 0 || index >= this.size) {
			console.error('Index out of bounds');
			return;
		}

		if (index === 0) {
			return this.deleteFirst();
		}
		if (index === this.size - 1) {
			return this.deleteLast();
		}

		const prev = this.getNode(index - 1);
		if (!prev?.next) {
			console.error('Error finding prev node');
			return;
		}

		const target = prev.next;
		prev.next = target.next;
		target.next = null; // prev.next = target.next 만으로도 삭제할 노드를 리스트에서 끊어내는 것은 이미 이루어지므로, 명시적으로 설정할 필요 없음 (더 이상 그 노드를 참조하는 다른 변수가 없다면, 가비지 컬렉터가 해당 메모리를 회수함)
		this.size--;
	}

	findNode(value: T): ListNode<T> | null {
		let temp = this.head;

		while (temp) {
			if (temp.value === value) {
				console.log(`${value} is found.`);
				return temp;
			}
			temp = temp.next;
		}

		console.log(`${value} is not found.`);
		return null;
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