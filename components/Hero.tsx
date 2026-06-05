import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#D6B88A]/20 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#0F5B6E]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Accompagnement du quotidien à Angoulins et La Rochelle
          </p>

          <h1 className="brand-title mb-6 text-5xl font-bold leading-tight text-[#0F5B6E] md:text-7xl">
            Retrouver du temps pour l&apos;essentiel
          </h1>

          <p className="mb-6 max-w-xl text-lg leading-8 text-[#3C3C3C]/75">
            J'accompagne les familles, les seniors autonomes
            et les particuliers avec écoute, bienveillance et simplicité pour
            alléger la charge mentale, simplifier le quotidien et retrouver plus
            de sérénité en Charente-Maritime.
          </p>
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
  {[
    "Premier échange offert",
    "Angoulins & La Rochelle",
    "Accompagnement humain",
  ].map((badge) => (
    <div
      key={badge}
      className="rounded-full border border-[#D6B88A]/40 bg-white/70 px-4 py-3 text-center text-sm font-medium text-[#0F5B6E] shadow-sm"
    >
      ✓ {badge}
    </div>
  ))}
</div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#0F5B6E] px-8 py-4 text-center font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0b4655]"
            >
              Premier échange découverte offert
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6B88A] bg-white/60 px-8 py-4 text-center font-medium text-[#0F5B6E] transition hover:-translate-y-1 hover:bg-white"
            >
              Voir comment je peux vous aider
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] bg-white p-5 shadow-2xl">
            <div className="relative h-[430px] overflow-hidden rounded-[2rem]">
              <Image
                src="/anne-sophie-photo.png"
                alt="Anne-Sophie, accompagnatrice du quotidien à Angoulins et La Rochelle"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -left-6 rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B88A]">
              Ma promesse
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