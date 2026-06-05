export default function Footer() {
  return (
    <footer className="bg-[#0F5B6E] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:items-start">
        <div>
          <p className="text-2xl font-semibold">Anne-Sophie & Vous</p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#D6B88A]">
            Accompagnatrice du Quotidien
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
            Retrouver du temps pour l&apos;essentiel grâce à un accompagnement
            humain, bienveillant et personnalisé.
          </p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#D6B88A]">Navigation</p>
          <nav className="flex flex-col gap-3 text-sm text-white/75">
            <a href="#about" className="transition hover:text-white">
              Qui suis-je ?
            </a>
            <a href="#services" className="transition hover:text-white">
              Accompagnements
            </a>
            <a href="#values" className="transition hover:text-white">
              Valeurs
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#D6B88A]">Contact</p>
          <div className="space-y-3 text-sm text-white/75">
            <p>Angoulins, La Rochelle et alentours</p>
            <p>Téléphone : à compléter</p>
            <p>Email : à compléter</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Anne-Sophie & Vous. Tous droits
          réservés.
        </p>

        <div className="flex gap-5">
          <a href="#" className="transition hover:text-white">
            Mentions légales
          </a>
          <a href="#" className="transition hover:text-white">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}