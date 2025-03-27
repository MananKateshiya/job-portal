const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  theme: {
    extend: {
      screen: {
        '2xl': '1300px'
      },
      boxShadow: {
        '100': "2px 2px 0px 0px rgb(0, 0, 0)",
        '200': "2px 2px 0px 2px rgb(0, 0, 0)",
        '300': "2px 2px 0px 2px rgb(193, 43, 238)",
      },
      animation: {
        'border-anim': 'borderMove 5s linear infinite',
      },
      keyframes: {
        borderMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}


export default config;
