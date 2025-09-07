/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'likya': {
          primary: '#2C2C2C',      // Ana Renk - Light Black
          secondary: '#404040',    // İkincil Renk - Darker Light Black
          'accent-orange': '#666666', // Light Gray Accent
          'accent-gold': '#555555',   // Medium Gray Accent
          'bg-neutral': '#F8F8F8',    // Arka Plan Nötr - Slightly Darker
          'text-dark': '#1A1A1A',     // Koyu Metin - Darker
        }
      },
      fontFamily: {
        'title': ['var(--font-dm-serif)', 'DM Serif Display', 'serif'],
        'body': ['var(--font-work-sans)', 'Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-likya': 'linear-gradient(135deg, #2C2C2C 0%, #404040 100%)',
        'gradient-likya-reverse': 'linear-gradient(135deg, #404040 0%, #2C2C2C 100%)',
      },
    },
  },
  plugins: [],
}
