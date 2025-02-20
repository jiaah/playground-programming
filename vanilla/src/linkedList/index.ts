import { appendToOutput, createContainer, createSection } from '../utils/display';
import { CircularLinkedList } from './circularLinkedList';
import { DoublyLinkedList } from './doublyLinkedList';
import { SinglyLinkedList } from './singlyLinkedList';

type LogFunction = (output: Element, text: string) => void;

function runSinglyLinkedList(output: Element, log: LogFunction) {
	const list = new SinglyLinkedList<number>();
	list.addToHead(10);
	list.addToHead(20);
	list.addToHead(30);
	log(output, list.printList());

	list.addAfter(40, 2);
	log(output, list.printList());
	list.addAfter(50, 0);
	log(output, list.printList());
	list.addAfter(60, 1);
	log(output, list.printList());

	list.deleteFirst();
	log(output, list.printList());

	list.deleteLast();
	log(output, list.printList());

	list.delete(2);
	log(output, list.printList());

	log(output, list.findNode(40));
	log(output, list.findNode(50));
}

function runDoublyLinkedList(output: Element, log: LogFunction) {
	const list = new DoublyLinkedList<number>();
	list.addToHead(3);
	list.addToHead(2);
	list.addToHead(1);
	log(output, list.printList());

	list.reverse();
	log(output, 'reverse!')
	log(output, list.printList());

	list.addToTail(0);
	log(output, list.printList());

	list.addAt(4, 0);
	log(output, list.printList());
	list.addAt(5, 5);
	log(output, list.printList());
	list.addAt(6, 2);
	log(output, list.printList());
}

function runCircularLinkedList(output: Element, log: LogFunction) {
	const list = new CircularLinkedList<number>();
	list.addToHead(3);
	list.addToHead(2);
	list.addToHead(1);
	log(output, list.printList());

	list.addToTail(0);
	log(output, list.printList());

	list.addAfter(4, 0);
	log(output, list.printList());
	list.addAfter(5, 4);
	log(output, list.printList());
	list.addAfter(50, 2);
	log(output, list.printList());
}


export function initLinkedList() {
	const section = document.getElementById('linkedList');
	if (!section) return;

	const container = createContainer();

	// 섹션 생성
	const sections = {
		singly: createSection('Singly Linked List'),
		doubly: createSection('Doubly Linked List'),
		circular: createSection('Circular Linked List')
	};

	Object.values(sections).forEach(section => {
		container.appendChild(section);
	});
	section.appendChild(container);

	// 각 리스트 실행
	const outputs = {
		singly: sections.singly.querySelector('.output-content')!,
		doubly: sections.doubly.querySelector('.output-content')!,
		circular: sections.circular.querySelector('.output-content')!
	};

	runSinglyLinkedList(outputs.singly, appendToOutput);
	runDoublyLinkedList(outputs.doubly, appendToOutput);
	runCircularLinkedList(outputs.circular, appendToOutput);
}