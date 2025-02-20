import { initLinkedList } from './linkedList';
import './style.css';
import { initTimer } from './timer';

const sectionHandlers = {
	linkedList: initLinkedList,
	timer: initTimer
};

document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.nav-button');
	
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const section = button.getAttribute('data-section');
			if (!section || !(section in sectionHandlers)) return;

			// Remove existing section
			const existingSection = document.querySelector('section');
			if (existingSection) {
				existingSection.remove();
			}

			// Create new section
			const newSection = document.createElement('section');
			newSection.id = section;
			document.getElementById('app')?.appendChild(newSection);

			// Initialize section content
			sectionHandlers[section as keyof typeof sectionHandlers]();
		});
	});
});