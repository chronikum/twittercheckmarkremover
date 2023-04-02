chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.type === 'PAGE_LOADED') {
	  console.log('Twitter page loaded:', sender.tab.url);
	}
	console.log('message', message);
});