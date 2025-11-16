import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sgma-navy': '#08415C',
        'sgma-charcoal': '#283044',
        'sgma-beige': '#F9DBBD',
        'sgma-cream': '#FAF3DD',
        'sgma-teal': '#7EBEC5',
        'sgma-cta': '#2a4586',
      },
      fontFamily: {
        belleza: ['var(--font-belleza)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
