import { appendToOutput, createContainer, createSection } from '../utils/display';

export function initTimer() {
	const section = document.getElementById('timer');
	if (!section) return;

	const container = createContainer();

	// 테스트 섹션들 생성
	const sections = {
		basic: createSection('Test 1: Basic Timer', '최소 지연 시간 확인'),
		microtask: createSection('Test 2: Timer with Microtasks', '마이크로태스크 큐가 타이머 실행을 어떻게 지연시키는지 보여줌'),
		sync: createSection('Test 3: Timer with Long Sync Task', '콜 스택의 긴 작업이 타이머 실행을 어떻게 지연시키는지 보여줌'),
		multiple: createSection('Test 4: Multiple Timers', 'setTimeout은 최소 지연 시간만을 보장하며, 정확한 실행 시간은 보장되지 않음. 다만 여러 타이머가 있을 때 지연 시간이 짧은 순서대로 실행되는 것은 보장됨')
	};

	Object.values(sections).forEach(section => {
		container.appendChild(section);
	});
	section.appendChild(container);

	// 각 테스트의 출력 영역
	const outputs = {
		basic: sections.basic.querySelector('.output-content')!,
		microtask: sections.microtask.querySelector('.output-content')!,
		sync: sections.sync.querySelector('.output-content')!,
		multiple: sections.multiple.querySelector('.output-content')!
	};

	// Test 1: Basic Timer
	const basicStart = Date.now();
	appendToOutput(outputs.basic, 'Setting timer for 0ms...');
	setTimeout(() => {
		appendToOutput(outputs.basic, `Basic Timer executed after: ${Date.now() - basicStart}ms`);
	}, 0);

	// Test 2: Timer with Microtasks
	const microtaskStart = Date.now();
	appendToOutput(outputs.microtask, 'Setting timer for 0ms with 1000 microtasks...');
	setTimeout(() => {
		appendToOutput(outputs.microtask, `Timer with microtasks executed after: ${Date.now() - microtaskStart}ms`);
	}, 0);

	for (let i = 0; i < 1000; i++) {
		Promise.resolve().then(() => {
			if (i === 0) appendToOutput(outputs.microtask, 'Starting microtasks execution...');
			if (i === 999) appendToOutput(outputs.microtask, 'Finished 1000 microtasks');
		});
	}

	// Test 3: Timer with Long Sync Task
	const syncStart = Date.now();
	appendToOutput(outputs.sync, 'Setting timer for 0ms with 1s sync task...');
	setTimeout(() => {
		appendToOutput(outputs.sync, `Timer with sync task executed after: ${Date.now() - syncStart}ms`);
	}, 0);

	const blockStart = Date.now();
	while (Date.now() - blockStart < 1000) { }
	appendToOutput(outputs.sync, `Synchronous task completed after: ${Date.now() - blockStart}ms`);

	// Test 4: Multiple Timers
	const multiStart = Date.now();
	appendToOutput(outputs.multiple, 'Setting multiple timers...');

	setTimeout(() => {
		appendToOutput(outputs.multiple, `Timer 1 (0ms) executed after: ${Date.now() - multiStart}ms`);
	}, 0);

	setTimeout(() => {
		appendToOutput(outputs.multiple, `Timer 2 (100ms) executed after: ${Date.now() - multiStart}ms`);
	}, 100);

	setTimeout(() => {
		appendToOutput(outputs.multiple, `Timer 3 (50ms) executed after: ${Date.now() - multiStart}ms`);
	}, 50);

	appendToOutput(outputs.multiple, 'All timers set. Now waiting...');
}