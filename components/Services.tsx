const services = [
  {
    title: "Quotidien simplifié",
    benefit:
      "Pour alléger les journées chargées et retrouver du temps pour ce qui compte vraiment.",
    examples: [
      "Organisation du quotidien",
      "Courses ou drives",
      "Garde d'enfants ponctuelle et accompagnement aux activités",
      "Accompagnement ponctuel",
    ],
    cta: "Simplifier mon quotidien",
  },
  {
    title: "Sérénité senior",
    benefit:
      "Pour accompagner un senior autonome avec douceur, présence et confiance.",
    examples: [
      "Sorties accompagnées",
      "Présence conviviale",
      "Activités,jeux de societe,jeux de cartes ou lecture ",
    ],
    cta: "Parler d’un proche",
  },
  {
    title: "Bien-être & équilibre",
    benefit:
      "Pour réduire la charge mentale, retrouver de l’apaisement et avancer plus sereinement.",
    examples: [
      "Gestion du stress",
      "Sophrologie",
      "Écoute et recentrage",
      "Organisation personnelle",
    ],
    cta: "Retrouver de la sérénité",
  },
  {
    title: "Services de confiance",
    benefit:
      "Pour confier certaines petites missions du quotidien à une personne fiable et attentive.",
    examples: [
      "Visite aux animaux et promenades",
      "Surveillance du domicile",
      "Arrosage des plantes",
      "Services de proximité",
    ],
    cta: "Échanger sur mon besoin",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Accompagnements
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Des services pensés pour vous simplifier la vie.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            Qu’il s’agisse d’un besoin ponctuel ou d’un accompagnement régulier,
            Je vous aide à retrouver du temps, de la sérénité et de la
            clarté dans votre quotidien.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-[2rem] border border-[#D6B88A]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5B6E] text-2xl text-white transition group-hover:bg-[#D6B88A]">
                ✦
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[#0F5B6E]">
                {service.title}
              </h3>

              <p className="mb-6 leading-8 text-[#3C3C3C]/75">
                {service.benefit}
              </p>

              <ul className="mb-8 space-y-3 text-sm text-[#3C3C3C]/70">
                {service.examples.map((example) => (
                  <li key={example}>✓ {example}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto inline-flex w-fit rounded-full border border-[#D6B88A] px-5 py-2 text-sm font-medium text-[#0F5B6E] transition hover:bg-[#FAF7F2]"
              >
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}