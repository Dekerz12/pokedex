/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#C2C2A1',
        flying: '#BAB0D5',
        ghost: '#735797',
        dark: '#75747e',
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
        dragon: '#1582e7',
        btn_normal: '#9da0aa',
        btn_flying: '#748fc9',
        btn_ghost: '#556aae',
        btn_dark: '#58575f',
        btn_steel: '#417d9a',
        btn_ground: '#dd7748',
        btn_poison: '#a552cc',
        btn_grass: '#62b957',
        btn_fire: '#62b957',
        btn_electric: '#eed535',
        btn_fairy: '#ed6ec7',
        btn_bug: '#8cb230',
        btn_fighting: '#d04164',
        btn_water: '#4a90da',
        btn_psychic: '#ea5d60',
        btn_ice: '#61cec0',
        btn_rock: '#baab82',
        btn_dragon: '#0f6ac0',
      },
      fontFamily: {
        body: ['Poppins'],
      },
      animation: {
        growAndFade: 'growAndFade 1.5s infinite ease-out',
        wiggle: 'wiggle .8s ',
        slide: 'slide .25s ease-out',
      },
      keyframes: {
        growAndFade: {
          '0%': {
            opacity: '.75',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
        slide: {
          '0%': {
            opacity: '1',
            transform: 'scaleX(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
      },
    },
  },
  plugins: [
    percentageWidth, // <== Add our plugin to the list of tailwind plugins
    //other plugins...
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(normal|flying|ghost|dark|steel|ground|poison|grass|fire|electric|fairy|bug|fighting|water|psychic|ice|rock|dragon|btn_normal|btn_flying|btn_ghost|btn_dark|btn_steel|btn_ground|btn_poison|btn_grass|btn_fire|btn_electric|btn_fairy|btn_bug|btn_fighting|btn_water|btn_psychic|btn_ice|btn_rock|btn_dragon)/,
    },
  ],
};

// btn-normal: '#9da0aa',
// btn-flying: '#748fc9',
// btn-ghost: '#556aae',
// btn-dark: '#58575f',
// btn-steel: '#417d9a',
// btn-ground: '#dd7748',
// btn-poison: '#a552cc',
// btn-grass: '#62b957',
// btn-fire: '#62b957',
// btn-electric: '#eed535',
// btn-fairy: '#ed6ec7',
// btn-bug: '#8cb230',
// btn-fighting: '#d04164',
// btn-water: '#4a90da',
// btn-psychic: '#ea5d60',
// btn-ice: '#61cec0',
// btn-rock: '#baab82',
// btn-dragon: '#0f6ac0',
