module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './widgets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        bolder: 1000,
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nonoSans: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
      },
      colors: {
        bgBlue: '#061224',
        blueGreen: '#64ffda',
        sideline: '#47528f',
        blueGreenDull: '#3ea58d',
      },
      spacing: {
        'minu-4': '-4rem',
        100: '29.626rem',
        103: '31.367rem',
        105: '32.372rem',
        75: '18.678rem',
        120: '45.985rem',
        'per-35': '35%',
        'per-65': '65%',
        'per-22': '22%',
        'per-78': '78%',
      },
      boxShadow: {
        'shadow-val': '0 10px 30px rgb(0 0 0 / 8%)',
      },
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '1/3': '33%',
    },
    screens: {
      ph: { max: '1024px' },
      md: { min: '600px', max: '1024px' },
      lg: { min: '1025px' },
      ltr: { min: '1024px', max: '1400px' },
      xlg: { min: '1450px' },
      sml: { max: '464px', min: '0px' },
    },
  },
  plugins: [],
}
