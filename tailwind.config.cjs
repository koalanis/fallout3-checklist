const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        pip: {
          light: "var(--pip-light)",
          mid: "var(--pip-mid)",
          dark: "var(--pip-dark)",
        },
      },
			fontFamily: {
        sans: ["VT323", ...defaultTheme.fontFamily.sans],
      },
			
			textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
				xl: '0 12px 24px var(--tw-shadow-color)',

      },
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
	],
}
