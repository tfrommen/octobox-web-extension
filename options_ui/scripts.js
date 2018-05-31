/* global browser */

const urlInput = document.getElementById('octobox-url');

function setOptions(options) {
	urlInput.value = options.octoboxUrl || 'https://octobox.io';
}

function restoreOptions() {
	const options = browser.storage.local.get();
	options.then(setOptions, console.error);
}

function saveOptions() {
	browser.storage.local.set({
		octoboxUrl: urlInput.value,
	});
}

document.addEventListener('DOMContentLoaded', () => restoreOptions());
urlInput.addEventListener('blur', () => saveOptions());
