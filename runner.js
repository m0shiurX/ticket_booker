let button = document.getElementById('book_btn');

button.addEventListener('click', async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: runSomeAction,
	});
});

// current page
function runSomeAction() {
	document.body.style.backgroundColor = '#1c1c1c';
}
