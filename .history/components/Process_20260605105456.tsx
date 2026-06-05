const steps = [
  {
    title: "Premier échange offert",
    text: "Un temps d&apos;écoute pour comprendre votre situation, vos besoins et vos priorités.",
  },
  {
    title: "Analyse de vos besoins",
    text: "Anne-Sophie identifie les solutions les plus adaptées à votre quotidien.",
  },
  {
    title: "Proposition personnalisée",
    text: "Un accompagnement clair, humain et cohérent avec vos attentes.",
  },
  {
    title: "Mise en place simple",
    text: "Les services sont organisés avec confiance, souplesse et proximité.",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Comment ça se passe ?
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Un accompagnement simple, humain et rassurant.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0F5B6E] text-white">
                {index + 1}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-[#0F5B6E]">
                {step.title}
              </h3>

              <p
                className="text-sm leading-7 text-[#3C3C3C]/70"
                dangerouslySetInnerHTML={{ __html: step.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}