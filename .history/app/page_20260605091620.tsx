export default function HomePage() {
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

  const values = ["Écoute", "Confiance", "Simplicité", "Bienveillance"];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#3C3C3C]">
      <header className="sticky top-0 z-50 border-b border-[#D6B88A]/30 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-semibold text-[#0F5B6E]">Anne-Sophie & Vous</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D6B88A]">
              Accompagnatrice du Quotidien
            </p>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#0F5B6E] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#0b4655]"
          >
            Me contacter
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Accompagnement humain de proximité
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#0F5B6E] md:text-6xl">
            Retrouver du temps pour l&apos;essentiel
          </h1>

          <p className="mb-8 text-lg leading-8 text-[#3C3C3C]/80">
            Anne-Sophie accompagne les familles, les seniors et les particuliers
            avec écoute, bienveillance et simplicité pour alléger le quotidien
            et retrouver plus de sérénité.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#0F5B6E] px-7 py-3 text-center font-medium text-white transition hover:bg-[#0b4655]"
            >
              Réserver un échange découverte
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6B88A] px-7 py-3 text-center font-medium text-[#0F5B6E] transition hover:bg-white"
            >
              Découvrir les accompagnements
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="flex h-80 items-center justify-center rounded-[1.5rem] bg-[#0F5B6E]/10 text-center">
            <div>
              <p className="text-6xl">🤍</p>
              <p className="mt-4 text-xl font-semibold text-[#0F5B6E]">
                Photo d&apos;Anne-Sophie
              </p>
              <p className="mt-2 text-sm text-[#3C3C3C]/70">
                À remplacer par une photo professionnelle et chaleureuse
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Qui suis-je ?
          </p>

          <h2 className="mb-6 text-3xl font-bold text-[#0F5B6E] md:text-4xl">
            Une présence, une écoute, des solutions
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-[#3C3C3C]/80">
            Passionnée par l&apos;accompagnement humain, forte d&apos;une expérience
            en Ressources Humaines, en sophrologie et dans l&apos;accompagnement
            de personnes à différentes étapes de leur vie, Anne-Sophie a créé
            Anne-Sophie & Vous pour apporter du temps, de la sérénité et des
            solutions concrètes aux quotidiens parfois surchargés.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Mes accompagnements
          </p>

          <h2 className="text-3xl font-bold text-[#0F5B6E] md:text-4xl">
            Des services pensés pour simplifier votre quotidien
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.5rem] border border-[#D6B88A]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
                {service.title}
              </h3>

              <p className="leading-7 text-[#3C3C3C]/75">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0F5B6E] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
              Valeurs
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              L&apos;humain au cœur de chaque accompagnement
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[1.5rem] bg-white/10 p-6 text-center backdrop-blur"
              >
                <p className="text-xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-xl md:p-14">
          <h2 className="mb-6 text-3xl font-bold text-[#0F5B6E] md:text-4xl">
            Pourquoi faire appel à Anne-Sophie & Vous ?
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Gagner du temps",
              "Réduire sa charge mentale",
              "Être accompagné en toute confiance",
              "Retrouver plus de sérénité",
              "Bénéficier d'un accompagnement personnalisé",
              "Avoir une interlocutrice unique",
            ].map((benefit) => (
              <p key={benefit} className="rounded-xl bg-[#FAF7F2] p-4">
                ✓ {benefit}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Contact
          </p>

          <h2 className="mb-6 text-3xl font-bold text-[#0F5B6E] md:text-4xl">
            Et si vous retrouviez du temps pour ce qui compte vraiment ?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#3C3C3C]/80">
            Parlons ensemble de vos besoins et trouvons les solutions adaptées
            à votre quotidien.
          </p>

          <div className="mx-auto grid max-w-2xl gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              <p className="font-semibold text-[#0F5B6E]">Téléphone</p>
              <p className="text-sm text-[#3C3C3C]/70">À compléter</p>
            </div>

            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              <p className="font-semibold text-[#0F5B6E]">Email</p>
              <p className="text-sm text-[#3C3C3C]/70">À compléter</p>
            </div>

            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              <p className="font-semibold text-[#0F5B6E]">Secteur</p>
              <p className="text-sm text-[#3C3C3C]/70">
                Angoulins, La Rochelle et alentours
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F5B6E] px-6 py-8 text-center text-white">
        <p className="text-lg font-semibold">Anne-Sophie & Vous</p>
        <p className="mt-2 text-sm text-white/75">
          Retrouver du temps pour l&apos;essentiel
        </p>
      </footer>
    </main>
  );
}