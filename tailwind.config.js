export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0F3D2E',
          deep: '#0A2A20',
        },
        lime: {
          DEFAULT: '#9FC131',
          dark: '#8FB926',
        },
        cream: {
          DEFAULT: '#F5F2EC',
          warm: '#EFE9DE',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
