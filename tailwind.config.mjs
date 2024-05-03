/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				verde1: '#233000',
				verde2: '#5E6600',
				verde3: '#9CAA00',
				verde4: '#EBF0E4',
				gris1: '#4D4D4D',
				gris2: '#B0B0B0',
			},
			fontFamily: {
				rufina: ['Rufina', 'serif'],
				lato: ['Lato', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
