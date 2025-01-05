function initTimer() {
	console.log('Start');

	const timeStamp = Date.now();
	setTimeout(() => {
		console.log(`Timeout callback <${Date.now() - timeStamp} ms>`);
	}, 0);

	// Add a lot of promises to fill up the Microtask Queue
	for (let i = 0; i < 1000; i++) {
		Promise.resolve().then(() => {
			if (i === 999) {
				console.log('Last Promise in Microtask Queue');
			}
		});
	}

	// Block the Call Stack for 1000 milliseconds
	const start = Date.now();
	while (Date.now() - start < 1000) { }

	console.log('End');

	// Expected Output:
	// 1. Start
	// 2. End
	// 3. Last Promise in Microtask Queue
	// 4. Timeout callback <elapsed_time>
}


document.addEventListener('DOMContentLoaded', () => {
	const linkedListLink = document.querySelector('a[data-section="timer"]');
	linkedListLink?.addEventListener('click', () => initTimer());
});
