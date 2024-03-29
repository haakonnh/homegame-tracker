/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
}


