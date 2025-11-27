import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#ff69b4',
        'pink-dark': '#ff1493',
        'pink-light': '#ffb6c1',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config




