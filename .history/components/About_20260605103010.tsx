export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="rounded-[2rem] bg-[#FAF7F2] p-8 shadow-sm">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Qui suis-je ?
          </p>

          <h2 className="brand-tittext-4xl font-bold leading-tight text-[#0F5B6E]">
            Une accompagnatrice à l&apos;écoute de votre quotidien.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-[#3C3C3C]/75">
            Passionnée par l&apos;accompagnement humain, forte d&apos;une
            expérience en Ressources Humaines, en sophrologie et dans
            l&apos;accompagnement de personnes à différentes étapes de leur vie,
            Anne-Sophie a créé Anne-Sophie & Vous pour apporter du temps, de
            l&apos;écoute, de la sérénité et des solutions concrètes aux
            quotidiens parfois surchargés.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Écoute active", "Approche humaine", "Solutions adaptées", "Relation de confiance"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#D6B88A]/30 bg-[#FAF7F2] p-5 text-[#0F5B6E]"
                >
                  ✓ {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}