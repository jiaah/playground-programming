import { DoublyLinkedList } from './doublyLinkedList';
import { SinglyLinkedList } from './singlyLinkedList';

function initSinglyLinkedList() {
	console.log('- Sinbly Linked List Start -');
	const list = new SinglyLinkedList<number>();
	list.addToHead(10);
	list.addToHead(20);
	list.addToHead(30);
	list.printList();

	list.addAfter(40, 2);
	list.printList();
	list.addAfter(50, 0);
	list.printList();
	list.addAfter(60, 1);
	list.printList();

	list.deleteFirst();
	list.printList();

	list.deleteLast();
	list.printList();

	list.delete(2);
	list.printList();

	list.findNode(40);
	list.findNode(50);

	list.getSize();
}

function initDoublyLinkedList() {
	console.log('- Doubly Linked List Start -');
	const list = new DoublyLinkedList<number>();
	list.addToHead(3);
	list.addToHead(2);
	list.addToHead(1);
	list.printList();

	list.reverse();
	console.log('After reverse:')
	list.printList();

	list.addToTail(0);
	list.printList();

	list.addAt(4, 0);
	list.printList();
	list.getSize();
	list.addAt(5, 5);
	list.printList();
	list.addAt(6, 2);
	list.printList();
}

document.addEventListener('DOMContentLoaded', () => {
	const linkedListLink = document.querySelector('a[data-section="linkedList"]');
	linkedListLink?.addEventListener('click', () => {
		initSinglyLinkedList();
		initDoublyLinkedList();
	});
});
