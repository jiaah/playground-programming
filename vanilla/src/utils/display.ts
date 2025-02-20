// 공통 디스플레이 유틸리티
export function createSection(title: string, description?: string) {
	const section = document.createElement('div');
	section.className = 'display-section';

	const titleElement = document.createElement('h2');
	titleElement.textContent = title;

	const descElement = document.createElement('p');
	descElement.className = 'section-description';
	descElement.textContent = description ?? '';

	const output = document.createElement('div');
	output.className = 'output-content';

	section.appendChild(titleElement);
	section.appendChild(descElement);
	section.appendChild(output);

	return section;
}

export function appendToOutput(output: Element, text: string) {
	const line = document.createElement('div');
	line.textContent = text;
	output.appendChild(line);
}

export function createContainer() {
	const container = document.createElement('div');
	container.className = 'display-container';
	return container;
}	