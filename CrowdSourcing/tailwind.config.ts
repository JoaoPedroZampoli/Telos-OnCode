import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'black-color': 'var(--black-color)', 
        'sub-30': 'var(--sub-30)',
        sub: 'var(--sub)',
      },
      backgroundImage:{
        'on-code': 'var(--on-code)', 
        'on-code-70': 'var(--on-code-70)',
        LoginBackgroundColor: 'var(--LoginBackgroundColor)'
      },
      aspectRatio:{
        'card-image': '420px / 240px',
      },
      height:{
        'screen-navbar': 'calc(100vh - 64px) !important'
      }
    },
  },
  plugins: [],
}
export default config
