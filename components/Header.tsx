import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D6B88A]/30 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="relative h-20 w-56">
          <Image
            src="/logo-anne-sophie.png"
            alt="Logo Anne-Sophie & Vous"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#3C3C3C]/80 md:flex">
          <a href="#about" className="hover:text-[#0F5B6E]">
            Qui suis-je ?
          </a>
          <a href="#services" className="hover:text-[#0F5B6E]">
            Mes services
          </a>
          <a href="#values" className="hover:text-[#0F5B6E]">
            Mes valeurs
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#0F5B6E] px-5 py-2 font-medium text-white transition hover:bg-[#0b4655]"
          >
            Me contacter
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#0F5B6E] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#0b4655] md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}