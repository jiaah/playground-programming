import { LinkedList } from './linkedList';

function initLinkedList() {
	const section = document.getElementById('linkedList');
	if (!section) return;

	section.innerHTML = `
        <div id="output">Result will be displayed here...</div>
    `;

	const list = new LinkedList<number>();
	list.addToHead(10);
	list.addToHead(20);
	list.addToHead(30);
	list.printList();
}

document.addEventListener('DOMContentLoaded', () => {
	const linkedListLink = document.querySelector('a[data-section="linkedList"]');
	linkedListLink?.addEventListener('click', () => initLinkedList());
});

export { LinkedList };
