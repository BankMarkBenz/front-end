module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
       '8': 'repeat(8, minmax(0, 1fr))',
       '18': 'repeat(18, minmax(0, 1fr))',
       'layout': '200px minmax(900px, 1fr) 100px',
      },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
        Italiana:['Yeseva One','cursive']
      }  }},
  variants: {
    extend: {},
  },
  plugins: [],
}
