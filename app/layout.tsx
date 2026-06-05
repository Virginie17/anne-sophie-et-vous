import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Anne-Sophie & Vous | Accompagnatrice du Quotidien',
  description: 'Accompagnement humain de proximité pour retrouver du temps, de la sérénité et allé