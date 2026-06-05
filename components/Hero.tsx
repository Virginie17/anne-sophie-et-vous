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
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#0F5B6E]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Votre alliée du quotidien à Angoulins et La Rochelle
          </p>

          <h1 className="brand-title mb-6 text-5xl font-bold leading-tight text-[#0F5B6E] md:text-7xl">
            Retrouver du temps pour l&apos;essentiel
          </h1>

          <p className="mb-6 max-w-xl text-lg leading-8 text-[#3C3C3C]/75">
            Je vous accompagne avec écoute, bienveillance et simplicité pour
            alléger votre quotidien, réduire votre charge mentale et vous aider
            à retrouver plus de sérénité à Angoulins, La Rochelle et alentours.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {badges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-[#D6B88A]/40 bg-white/75 px-4 py-3 text-center text-sm font-medium text-[#0F5B6E] shadow-sm backdrop-blur"
              >
                ✓ {badge}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#0F5B6E] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#0F5B6E]/20 transition hover:-translate-y-1 hover:bg-[#0b4655]"
            >
              Parlons de votre besoin
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6B88A] bg-white/70 px-8 py-4 text-center font-semibold text-[#0F5B6E] transition hover:-translate-y-1 hover:bg-white"
            >
              Voir comment je peux vous aider
            </a>
          </div>
        </div>

        <div className="relative pb-12 md:pb-0">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#D6B88A]/30 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#0F5B6E]/20 blur-2xl" />

          <div className="relative rounded-[3rem] border border-[#D6B88A]/30 bg-white/80 p-4 shadow-2xl shadow-[#0F5B6E]/10 backdrop-blur">
            <div className="relative h-[460px] overflow-hidden rounded-[2.4rem]">
              <Image
                src="/photo.webp"
                alt="Anne-Sophie, votre alliée du quotidien à Angoulins et La Rochelle"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute left-8 top-8 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#0F5B6E] shadow-md backdrop-blur">
              Votre alliée du quotidien
            </div>
          </div>

          <div className="absolute -bottom-2 left-6 right-6 rounded-[2rem] bg-[#0F5B6E] p-6 text-white shadow-2xl md:-bottom-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B88A]">
              Ma promesse
            </p>
            <p className="mt-2 text-lg font-semibold">
              Je vous accompagne avec écoute, douceur et confiance.
            </p>
          </div>

          <div className="absolute -right-4 -top-6 hidden rounded-full bg-[#D6B88A] px-6 py-3 text-sm font-semibold text-[#0F5B6E] shadow-xl md:block">
            Accompagnement local
          </div>
        </div>
      </div>
    </section>
  );
}