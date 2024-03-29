/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fira: ['Fira Code', 'monospace'],
      nunito: ['Nunito', 'sans-serif'],
    },

    colors: {
      input: '#040F1A',
      background: '#071422',
      profile: '#0B1B2B',
      post: '#112131',
      border: '#1C2F41',
      label: '#3A536B',
      span: '#7B96B2',
      text: '#AFC2D4',
      subtitle: '#C4D4E3',
      title: '#E7EDF4',
      blue: '#3294F8',
    },

    extend: {
      backgroundImage: {
        'header-image': "url('/headerBg.png')",
      },
    },

    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    plugins: [],
  },
}
