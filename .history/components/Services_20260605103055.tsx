const services = [
  {
    title: "Quotidien simplifié",
    text: "Organisation, courses, démarches et accompagnement ponctuel pour alléger les journées chargées.",
  },
  {
    title: "Sérénité senior",
    text: "Présence, sorties, convivialité, aide administrative simple et accompagnement en confiance.",
  },
  {
    title: "Bien-être & équilibre",
    text: "Sophrologie, gestion du stress, charge mentale, écoute et recentrage pour retrouver de la sérénité.",
  },
  {
    title: "Services de confiance",
    text: "Visites aux animaux, surveillance du domicile, arrosage des plantes et petits services de proximité.",
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
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-[#D6B88A]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5B6E] text-2xl text-white transition group-hover:bg-[#D6B88A]">
                ✦
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[#0F5B6E]">
                {service.title}
              </h3>

              <p className="leading-8 text-[#3C3C3C]/70">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}