export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="rounded-[2rem] bg-[#FAF7F2] p-8 shadow-sm">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Qui suis-je ?
          </p>

          <h2 className="brand-title text-4xl font-bold leading-tight text-[#0F5B6E] md:text-5xl">
            Une accompagnatrice à l&apos;écoute de votre quotidien.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-[#3C3C3C]/75">
            Installée à Angoulins, près de La Rochelle, j&apos;accompagne
            les familles, les seniors autonomes et les particuliers qui souhaitent
            alléger leur quotidien, réduire leur charge mentale et retrouver plus
            de sérénité.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#3C3C3C]/75">
            Forte d&apos;une expérience en Ressources Humaines, en sophrologie et
            dans l&apos;accompagnement humain, je propose une présence rassurante,
            une écoute attentive et des solutions personnalisées adaptées à chaque
            situation.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Écoute active",
              "Approche humaine",
              "Solutions adaptées",
              "Relation de confiance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D6B88A]/30 bg-[#FAF7F2] p-5 text-[#0F5B6E]"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}