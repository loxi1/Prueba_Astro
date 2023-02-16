/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				principal: {
					100: '#cd550034',
					200: '#cd550051',
					300: '#cd550068',
					400: '#cd550085',
					500: '#cd5500a2',
					600: '#cd5500b9',
					700: '#cd5500c6',
					800: '#cd5500d3',
					900: '#cd5500ff',
					DEFAULT: '#e6ac2f'
				},
				'principal-dark': '#404348'
			}
		},
	},
	plugins: [],
}
