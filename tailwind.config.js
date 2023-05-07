/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// text
				dark: 'hsl(228, 39%, 23%)',
				light: 'hsl(227, 12%, 61%)',
				// others
				accent: 'hsl(12, 88%, 59%)',
				footer: 'hsl(233, 12%, 13%)',
				'accent-light': 'hsl(13, 100%, 96%)',
				card: 'hsl(0, 0%, 98%)',
			},
			fontFamily: {
				primary: ['Be Vietnam Pro', 'sans-serif'],
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: false,
		themes: false,
		base: false,
		utils: false,
		logs: false,
		rtl: false,
		prefix: 'daisy-',
		darkTheme: 'dark',
	},
}
