import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	darkMode: ['selector', '[data-theme="dark"]'],
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['light', 'dark'],
	},
} satisfies Config;
