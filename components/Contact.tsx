import { siteConfig } from "../lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#FAF7F2] p-8 text-center shadow-xl md:p-14">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
          Contact
        </p>

        <h2 className="brand-title mb-6 text-4xl font-bold text-[#0F5B6E] md:text-5xl">
          Et si vous retrouviez du temps pour ce qui compte vraiment ?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[#3C3C3C]/75">
          Parlons ensemble de votre situation à Angoulins, La Rochelle ou en
          Charente-Maritime, puis trouvons les solutions les plus adaptées à
          votre quotidien.
        </p>

        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold text-[#0F5B6E]">Téléphone</p>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="mt-2 block text-sm text-[#3C3C3C]/65 transition hover:text-[#0F5B6E]"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold text-[#0F5B6E]">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-sm text-[#3C3C3C]/65 transition hover:text-[#0F5B6E]"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold text-[#0F5B6E]">Secteur</p>
            <p className="mt-2 text-sm text-[#3C3C3C]/65">
              Angoulins, La Rochelle et alentours
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex rounded-full bg-[#0F5B6E] px-8 py-4 font-semibold text-white shadow-lg shadow-[#0F5B6E]/20 transition hover:-translate-y-1 hover:bg-[#0b4655]"
          >
            M&apos;écrire
          </a>

          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex rounded-full border border-[#D6B88A] bg-white px-8 py-4 font-semibold text-[#0F5B6E] transition hover:-translate-y-1 hover:bg-[#FAF7F2]"
          >
            M&apos;appeler
          </a>
        </div>

        <p className="mt-6 text-sm text-[#3C3C3C]/60">
          Réponse sous 24 à 48h selon disponibilités.
        </p>
      </div>
    </section>
  );
}