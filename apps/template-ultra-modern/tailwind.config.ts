import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../libs/sections/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        accent: {
          DEFAULT: '#1a1a1a',
          warm: '#c4a882',
        },
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0, 0, 0, 0.03)',
        float: '0 8px 32px rgba(0, 0, 0, 0.06)',
        glass: '0 4px 24px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
}

export default config
