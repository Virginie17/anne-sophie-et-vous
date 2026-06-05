import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        petrol: '#0F5B6E',
        gold: '#D6B88A',
        cream: '#FAF7F2',
        anthracite: '#3C3C3C'
      },
      fontFamily: {
        serifDisplay: ['var(--font-playfair)', 'serif'],
        sansText: ['var(--font-montserrat)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18