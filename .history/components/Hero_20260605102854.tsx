export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#D6B88A]/20 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#0F5B6E]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Accompagnement humain de proximité
          </p>

          <h1 className="brmb-6 text-5xl font-bold leading-tight text-[#0F5B6E] md:text-7xl">
            Retrouver du temps pour l&apos;essentiel
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[#3C3C3C]/75">
            Anne-Sophie accompagne les familles, les seniors et les particuliers
            avec écoute, bienveillance et simplicité pour alléger le quotidien
            et retrouver plus de sérénité.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#0F5B6E] px-8 py-4 text-center font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0b4655]"
            >
              Réserver un échange découverte
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6B88A] bg-white/60 px-8 py-4 text-center font-medium text-[#0F5B6E] transition hover:-translate-y-1 hover:bg-white"
            >
              Découvrir les accompagnements
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl">
            <div className="flex h-[430px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#0F5B6E]/10 to-[#D6B88A]/20 text-center">
              <div className="px-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-md">
                  🤍
                </div>
                <p className="text-2xl font-semibold text-[#0F5B6E]">
                  Photo d&apos;Anne-Sophie
                </p>
                <p className="mt-3 text-sm leading-6 text-[#3C3C3C]/65">
                  Remplacer par une photo professionnelle, souriante et
                  chaleureuse.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-6 rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B88A]">
              Promesse
            </p>
            <p className="mt-2 max-w-xs text-lg font-semibold text-[#0F5B6E]">
              Une présence, des solutions, de la sérénité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}