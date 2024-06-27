import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      colors: {
         firstBg: '#383C47',
         secondBg: '#272B34',
         red: '#FF4342',
         blue: '#3472FB',
         white: '#FEFEFE',
         green: '#2FFB78',
         gray: '#5D6C89',
         black: '#000',
      },
      extend: {},
   },
   plugins: [],
}
export default config
