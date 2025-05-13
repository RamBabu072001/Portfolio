/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        'slider-x': {
          '0%': { transform: 'translateX(-2rem)' },
          '100%': { transform: 'translateX(11rem)' },
        },
        'slider-y-reverse':{
          '0%':{transform:'translateY(0%)'},
          '100%':{transform: 'translateY(100%)'},
        }
      },
      animation: {
        'slider-x': 'slider-x 0.7s ease-in-out forwards',
        'slider-y-reverse':'slider-y-reverse 0.7s ease-in-out reverse'
      },
      
    },
  },
  plugins: [],
}
