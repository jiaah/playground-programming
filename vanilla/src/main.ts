import './linkedList';
import './style.css';
import './timer';

function showSection(sectionId: string) {
	const existingSection = document.querySelector('section');
	if (existingSection) {
		existingSection.remove();
	}

	const section = document.createElement('section');
	section.id = sectionId;
	document.getElementById('app')?.appendChild(section);
}

(window as any).showSection = showSection;