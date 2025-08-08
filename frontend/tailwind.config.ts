import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Radix UI colors
        // Radix UI Blue Scale
        blue: {
          1: 'var(--blue-1)',
          2: 'var(--blue-2)',
          3: 'var(--blue-3)',
          4: 'var(--blue-4)',
          5: 'var(--blue-5)',
          6: 'var(--blue-6)',
          7: 'var(--blue-7)',
          8: 'var(--blue-8)',
          9: 'var(--blue-9)',
          10: 'var(--blue-10)',
          11: 'var(--blue-11)',
          12: 'var(--blue-12)',
          a1: 'var(--blue-a1)',
          a2: 'var(--blue-a2)',
          a3: 'var(--blue-a3)',
          a4: 'var(--blue-a4)',
          a5: 'var(--blue-a5)',
          a6: 'var(--blue-a6)',
          a7: 'var(--blue-a7)',
          a8: 'var(--blue-a8)',
          a9: 'var(--blue-a9)',
          a10: 'var(--blue-a10)',
          a11: 'var(--blue-a11)',
          a12: 'var(--blue-a12)',
          contrast: 'var(--blue-contrast)',
          surface: 'var(--blue-surface)',
          indicator: 'var(--blue-indicator)',
          track: 'var(--blue-track)',
        },
        
        // Radix UI Gray Scale
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
          7: 'var(--gray-7)',
          8: 'var(--gray-8)',
          9: 'var(--gray-9)',
          10: 'var(--gray-10)',
          11: 'var(--gray-11)',
          12: 'var(--gray-12)',
          a1: 'var(--gray-a1)',
          a2: 'var(--gray-a2)',
          a3: 'var(--gray-a3)',
          a4: 'var(--gray-a4)',
          a5: 'var(--gray-a5)',
          a6: 'var(--gray-a6)',
          a7: 'var(--gray-a7)',
          a8: 'var(--gray-a8)',
          a9: 'var(--gray-a9)',
          a10: 'var(--gray-a10)',
          a11: 'var(--gray-a11)',
          a12: 'var(--gray-a12)',
          contrast: 'var(--gray-contrast)',
          surface: 'var(--gray-surface)',
          indicator: 'var(--gray-indicator)',
          track: 'var(--gray-track)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
