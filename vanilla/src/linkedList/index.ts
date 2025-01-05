import { LinkedList } from './linkedList';

function initLinkedList() {
	const section = document.getElementById('linkedList');
	if (!section) return;

	section.innerHTML = `
			<div>
				<div id="size">Size will be displayed here..</div>
        <div id="output">Result will be displayed here...</div>
			</div>
    `;

	const list = new LinkedList<number>();
	list.addToHead(10);
	list.addToHead(20);
	list.addToHead(30);
	list.printList();

	list.addAfter(40, 0);
	list.printList();
	list.addAfter(50, 3);
	list.printList();

	list.getSize();
}

document.addEventListener('DOMContentLoaded', () => {
	const linkedListLink = document.querySelector('a[data-section="linkedList"]');
	linkedListLink?.addEventListener('click', () => initLinkedList());
});
