/* global browser */

const linkElement = document.getElementById('user-links').querySelector('a.notification-indicator');

function applyOptions(options) {
	linkElement.href = options.octoboxUrl || 'https://octobox.io';
}

const options = browser.storage.local.get();
options.then(applyOptions, console.error);
