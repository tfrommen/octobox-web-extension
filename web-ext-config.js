module.exports = {
	ignoreFiles: [
		'LICENSE',
		'README.md',
		'package.json',
		'package-lock.json',
		'web-ext-config.js',
		'yarn.lock',
	],
	build: {
		overwriteDest: true,
	},
	run: {
		firefox: 'firefoxdeveloperedition',
	},
};
