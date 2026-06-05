const services = [
  {
    title: "Sérénité senior",
    label: "Accompagnement clé",
    benefit:
      "Pour accompagner un senior autonome avec douceur, présence et confiance.",
    examples: [
      "Sorties accompagnées",
      "Présence conviviale",
      "Aide administrative simple",
      "Activités, jeux de société, lecture",
    ],
    cta: "Parler d’un proche",
    featured: true,
  },
  {
    title: "Quotidien simplifié",
    label: "Organisation",
    benefit:
      "Pour alléger les journées chargées et retrouver du temps pour ce qui compte vraiment.",
    examples: [
      "Organisation du quotidien",
      "Courses ou drives",
      "Démarches simples",
      "Soutien ponctuel à l’organisation familiale",
    ],
    cta: "Simplifier mon quotidien",
    featured: false,
  },
  {
    title: "Bien-être & équilibre",
    label: "Sérénité",
    benefit:
      "Pour réduire la charge mentale, retrouver de l’apaisement et avancer plus sereinement.",
    examples: [
      "Gestion du stress",
      "Sophrologie",
      "Écoute et recentrage",
      "Organisation personnelle",
    ],
    cta: "Retrouver de la sérénité",
    featured: false,
  },
  {
    title: "Services de confiance",
    label: "Proximité",
    benefit:
      "Pour confier certaines petites missions du quotidien à une personne fiable et attentive.",
    examples: [
      "Visite aux animaux",
      "Surveillance du domicile",
      "Arrosage des plantes",
      "Services de proximité",
    ],
    cta: "Échanger sur mon besoin",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-20 md:py-24">
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#D6B88A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Accompagnements
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Comment je peux vous aider concrètement ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            Qu’il s’agisse d’un besoin ponctuel ou d’un accompagnement régulier,
            je vous aide à retrouver du temps, de la sérénité et de la clarté
            dans votre quotidien.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={[
                "group flex flex-col rounded-[2rem] p-8 transition hover:-translate-y-1",
                service.featured
                  ? "bg-[#0F5B6E] text-white shadow-2xl shadow-[#0F5B6E]/20 lg:row-span-2"
                  : "border border-[#D6B88A]/30 bg-white/85 shadow-sm backdrop-blur hover:shadow-xl",
                index === 0 ? "lg:min-h-[520px]" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "mb-6 inline-flex w-fit rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]",
                  service.featured
                    ? "bg-white/15 text-[#D6B88A]"
                    : "bg-[#FAF7F2] text-[#0F5B6E]",
                ].join(" ")}
              >
                {service.label}
              </div>

              <h3
                className={[
                  "mb-4 text-3xl font-semibold",
                  service.featured ? "text-white" : "text-[#0F5B6E]",
                ].join(" ")}
              >
                {service.title}
              </h3>

              <p
                className={[
                  "mb-7 leading-8",
                  service.featured ? "text-white/80" : "text-[#3C3C3C]/75",
                ].join(" ")}
              >
                {service.benefit}
              </p>

              <ul
                className={[
                  "mb-8 space-y-3 text-sm",
                  service.featured ? "text-white/80" : "text-[#3C3C3C]/70",
                ].join(" ")}
              >
                {service.examples.map((example) => (
                  <li key={example}>✓ {example}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className={[
                  "mt-auto inline-flex w-fit rounded-full px-5 py-2 text-sm font-semibold transition",
                  service.featured
                    ? "bg-[#D6B88A] text-[#0F5B6E] hover:bg-white"
                    : "border border-[#D6B88A] text-[#0F5B6E] hover:bg-[#FAF7F2]",
                ].join(" ")}
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