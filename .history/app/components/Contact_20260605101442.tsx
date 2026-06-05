export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#FAF7F2] p-8 text-center shadow-xl md:p-14">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
          Contact
        </p>

        <h2 className="mb-6 text-4xl font-bold text-[#0F5B6E] md:text-5xl">
          Et si vous retrouviez du temps pour ce qui compte vraiment ?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[#3C3C3C]/75">
          Parlons ensemble de vos besoins et trouvons les solutions les plus
          adaptées à votre quotidien.
        </p>

        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold text-[#0F5B6E]">Téléphone</p>
            <p className="mt-2 text-sm text-[#3C3C3C]/65">À compléter</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold text-[#0F5B6E]">Email</p>
            <p className="mt-2 text-sm text-[#3C3C3C]/65">À compléter</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold text-[#0F5B6E]">Secteur</p>
            <p className="mt-2 text-sm text-[#3C3C3C]/65">
              Angoulins, La Rochelle et alentours
            </p>
          </div>
        </div>

        <a
          href="mailto:"
          className="mt-10 inline-flex rounded-full bg-[#0F5B6E] px-8 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-[#0b4655]"
        >
          Demander un échange découverte
        </a>
      </div>

      <footer className="mx-auto mt-14 max-w-7xl text-center">
        <p className="text-xl font-semibold text-[#0F5B6E]">
          Anne-Sophie & Vous
        </p>
        <p className="mt-2 text-sm text-[#3C3C3C]/60">
          Retrouver du temps pour l&apos;essentiel
        </p>
      </footer>
    </section>
  );
}