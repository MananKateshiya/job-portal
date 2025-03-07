const config = {
  plugins: ["@tailwindcss/postcss"],
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
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
