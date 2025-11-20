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
      fontSize: {
        // ============================================
        // COMPACT SEMANTIC TYPOGRAPHY SYSTEM
        // 9 semantic tokens - pragmatic & production-ready
        // ============================================

        // Display Sizes
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],        // 48px - Hero/primary marketing headline
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '900' }],  // 36px - Secondary hero/prominent page title

        // Heading Sizes
        'h1': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '900' }],             // 32px - Page title
        'h2': ['1.75rem', { lineHeight: '1.35', letterSpacing: '-0.005em', fontWeight: '700' }],        // 28px - Section title
        'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '700' }],                 // 24px - Subsection/card title
        'h4': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '700' }],                // 20px - Minor headings/component titles

        // Body Text Sizes
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' }],         // 18px - Emphasized body/important paragraphs
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],                 // 16px - Default body text (DEFAULT)

        // UI/Label Sizes
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '500' }],     // 14px - Labels, form text, helper text (MINIMUM for UI)
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
    },
  },
  plugins: [],
}
export default config
