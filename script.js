// Function to detect the Twitter feed
function isTwitterFeedLoaded() {
	const feed = document.querySelector('[aria-label="Timeline: Your Home Timeline"]');
	return !!feed;
}

// Function to start observing the DOM
function observeDOM() {
	const observer = new MutationObserver((mutations, observerInstance) => {
		console.log('mutations', mutations);
		if (isTwitterFeedLoaded()) {
			chrome.runtime.sendMessage({ type: 'TWITTER_FEED_LOADED' });
		}
		
		let allCheckmarks = document.querySelectorAll('[data-testid="icon-verified"]');

		allCheckmarks.forEach((checkmark) => {
			checkmark.remove();
		})
	});

	observer.observe(document, {
		childList: true,
		subtree: true,
	});
}


// Start observing the DOM after the initial DOM content has loaded
if (document.readyState === 'loading') {
	window.addEventListener('DOMContentLoaded', observeDOM);
} else {
	observeDOM();
}