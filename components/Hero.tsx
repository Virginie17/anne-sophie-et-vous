import Image from "next/image";

const badges = [
  "Premier échange offert",
  "Angoulins & La Rochelle",
  "Accompagnement humain",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#D6B88A]/25 blur-3xl" />
      <div className="absolute -left-