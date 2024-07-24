/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      midnight: '#00171f',
      darkBlue: '#003459',
      oceanBlue: '#007ea7',
      skyBlue: '#3e8df8',
      slate300: '#cbd5e1',
      slate100: '#f1f5f9',
    },
    extend: {
      gridTemplateColumns: {
        'minmax-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
};
