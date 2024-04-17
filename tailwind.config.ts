import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[style="color-scheme: dark;"]', ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'main': '2px -2px 25px 2px inset rgba(0,0,0,0.3)',
      },
      colors: {
        'viking': {
          '50': '#effcfb',
          '100': '#d6f6f7',
          '200': '#b2ecef',
          '300': '#7cdde4',
          '400': '#4ec9d4',
          '500': '#24a8b6',
          '600': '#218899',
          '700': '#216e7d',
          '800': '#235a67',
          '900': '#214c58',
          '950': '#11313b',
        },
        'whiskey': {
          '50': '#fbf7f1',
          '100': '#f6ebde',
          '200': '#ecd4bc',
          '300': '#dfb692',
          '400': '#d4986e',
          '500': '#c87747',
          '600': '#ba623c',
          '700': '#9a4e34',
          '800': '#7c4030',
          '900': '#653629',
          '950': '#361a14',
        },
        'bamboo': {
          '50': '#fdf6ef',
          '100': '#fbebd9',
          '200': '#f6d3b2',
          '300': '#f1b580',
          '400': '#ea8d4d',
          '500': '#e46b25',
          '600': '#d65620',
          '700': '#b2421c',
          '800': '#8e351e',
          '900': '#732e1b',
          '950': '#3e150c',
        },   
      },
      screens:{
        'tall' : {'raw' : '((min-height: 800px) and (min-width: 768px))'},
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      dropShadow: {
        'dark': '2px 10px 6px rgba(0, 0, 0, 0.4)',
        'x-dark': '1px 10px 4px rgba(0, 0, 0, 0.9)',
      },
      scale: {
       '101': '1.01',
      },
      width: {
        '90' : '90vw',
        '120': '120vw',
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '110vh': '110vh',
        '120': '120vh',
        '500' : '500px',
      },
      minHeight: {
        '500': '500px',
        '550': '550px',
        '700': '700px',
        '750': '750px',
      },
      maxHeight: {
        '80-s': '80vh',
        '95-s': '95vh',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-fit-275': 'repeat(auto-fit, minmax(275px, 1fr))',
      },
      rotate: {
        '135': '135deg',
        '225': '225deg',
      },
      transitionTimingFunction:{
        'nav' : 'cubic-bezier(.5,-0.5,.5,1.5)'
      },
      flex: {
        '0': '0'
      },
    },
  },
  plugins: [],
}
export default config
