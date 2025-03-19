/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
  		sm: '300px',
  		md: '768px',
  		lg: '1200px'
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			md: '2rem'
  		}
  	},
    extend: {
      fontFamily: {
        'lemonmilk': ['LEMONMILK', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};