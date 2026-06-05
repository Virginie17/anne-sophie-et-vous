import { Calendar, Heart, Home, Leaf, Mail, MapPin, Phone, ShieldCheck, Users } from 'lucide-react';

const services = [
  ['Quotidien simplifié', 'Organisation, courses, démarches et accompagnement ponctuel.', Home],
  ['Sérénité senior', 'Présence, sorties, convivialité et aide administrative simple.', Users],
  ['Bien-être & équilibre', 'Sophrologie, gestion du stress, charge mentale et recentrage.', Leaf],
  ['Services de confiance', 'Animaux, surveillance du domicile et petits services de proximité.', ShieldCheck]
];

const values = ['Écoute', 'Confiance', 'Simplicité', 'Bienveillance'];

export default function HomePage() {
  return (
    <main>
      <header className="bg-white/90 sticky top-0 z-50 border-b border-gold/20">
        <div className="container flex items-center justify-between py-4">
          <div className="font