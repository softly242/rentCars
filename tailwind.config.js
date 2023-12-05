/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(/src/images/hero.jpg)',
        'hero-1280': 'url(/src/images/hero-1280.jpg)',
      },
      backgroundColor: {
        overlay: 'rgb(2,15,8)',
      },
      backgroundGradient: {
        backgroundHero:
          'linear-gradient(180deg, rgba(22, 21, 22, 0.90) -7.87%, rgba(22, 21, 22, 0.60) 100%)',
      },
      screens: {
        xs: '480px',
      },
      width: {
        mobile: '480px',
        tablet: '768px',
      },
      maxWidth: {
        mobile: '480px',
        tablet: '768px',
      },
      fontFamily: {
        heading: 'Inter, sans-serif',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          md: '24px',
        },
        screens: {
          xs: '480px',
          md: '768px',
        },
      },
      fontSize: {
        xxs: '10px',
        xl4: '40px',
      },
    },
  },
  plugins: [],
};
