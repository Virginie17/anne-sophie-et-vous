export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D6B88A]/30 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xl font-semibold text-[#0F5B6E]">
            Anne-Sophie & Vous
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D6B88A]">
            Accompagnatrice du Quotidien
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-[#3C3C3C]/80 md:flex">
          <a href="#about" className="hover:text-[#0F5B6E]">
            Qui suis-je ?
          </a>
          <a href="#services" className="hover:text-[#0F5B6E]">
            Services
          </a>
          <a href="#values" className="hover:text-[#0F5B6E]">
            Valeurs
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#0F5B6E] px-5 py-2 font-medium text-white transition hover:bg-[#0b4655]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}