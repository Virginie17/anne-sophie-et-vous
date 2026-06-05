const values = [
  {
    title: "Écoute",
    text: "Prendre le temps de comprendre chaque besoin avec attention.",
  },
  {
    title: "Confiance",
    text: "Construire une relation fiable, simple et rassurante.",
  },
  {
    title: "Simplicité",
    text: "Apporter des solutions concrètes, accessibles et adaptées.",
  },
  {
    title: "Bienveillance",
    text: "Accompagner avec douceur, respect et authenticité.",
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-[#0F5B6E] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Valeurs
          </p>

          <h2 className="btext-4xl font-bold md:text-5xl">
            L&apos;humain au cœur de chaque accompagnement.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[2rem] bg-white/10 p-7 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="mb-3 text-2xl font-semibold text-[#D6B88A]">
                {value.title}
              </p>
              <p className="text-sm leading-7 text-white/75">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}