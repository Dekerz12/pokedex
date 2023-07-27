/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#C2C2A1',
        flying: '#BAB0D5',
        ghost: '#735797',
        dark: '#333',
        steel: '#CCCCDE',
        ground: '#B1736C',
        poison: '#7C538C',
        grass: '#48D0B0',
        fire: '#FB6C6C',
        electric: '#FFD86F',
        fairy: '#f469a9',
        bug: '#C3CE75',
        fighting: '#d6b591',
        water: '#609FB5',
        psychic: '#9B7FA6',
        ice: '#7FCCEC',
        rock: '#a6aab6',
        dragon: '#F9BE00',
      },
      fontFamily: {
        body: ['Poppins'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(normal|flying|ghost|dark|steel|ground|poison|grass|fire|electric|fairy|bug|fighting|water|psychic|ice|rock|dragon)/,
    },
  ],
};
