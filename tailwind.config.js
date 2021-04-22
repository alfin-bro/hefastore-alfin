module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html", "./**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
       slide : 'slide 0.5s ease forwards', 
       right : 'right 1s ease forwards', 
       left : 'left 1s ease forwards', 
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(999px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        right: {
          '0%': { transform: 'translateX(999px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        left: {
          '0%': { transform: 'translateX(-999px)' },
          '100%': { transform: 'translateX(0px)' }
        }
      },
      fontFamily: {
        'sans': [
          'Montserrat', 'arial'
        ],
        'display': [
          'Lora', 'Helvetica'
        ],
      },
      colors: {
        'red': '#E74C3C',
        'black-hero': '#171717',
        'green': '#1ABC9C',
        'blue': '#1B2690',
        'gray': {
          300: "#B7B7B7",
          400: '#EAEAEF',
          500: '#F6F7FB',
          550: '#ADADAD'
        },
        'white': '#fff',
        'orange': '#F9B234',
        'orange-dark': '#AA6E04'
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
