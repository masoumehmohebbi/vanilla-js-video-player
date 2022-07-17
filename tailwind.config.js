/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      height:{
        '78': '78vh',
      },
      colors:{
        main: 'rgb(var(--color-main) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',

        'purpleMain': '#8e44ad',
      },
      borderWidth:{
        '3':	'3px',
      },
    },
  },
  plugins: [],
}
