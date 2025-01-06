import { SinglyLinkedList } from './singlyLinkedList';

function initLinkedList() {
	const section = document.getElementById('linkedList');
	if (!section) return;

	section.innerHTML = `
			<div>
				<div id="size">Size will be displayed here..</div>
        <div id="output">Result will be displayed here...</div>
			</div>
    `;

	const list = new SinglyLinkedList<number>();
	list.addToHead(10);
	list.addToHead(20);
	list.addToHead(30);
	list.printList();

	list.addAfter(40, 0);
	list.printList();
	list.addAfter(50, 3);
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

document.addEventListener('DOMContentLoaded', () => {
	const linkedListLink = document.querySelector('a[data-section="linkedList"]');
	linkedListLink?.addEventListener('click', () => initLinkedList());
});
