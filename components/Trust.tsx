const trustItems = [
  {
    title: "Une expérience humaine solide",
    text: "Anne-Sophie s’appuie sur son parcours en ressources humaines, son sens de l’écoute et son expérience de l’accompagnement pour comprendre chaque situation avec justesse.",
  },
  {
    title: "Une approche bienveillante",
    text: "Chaque accompagnement est pensé avec respect, douceur et attention, en tenant compte du rythme, des besoins et de la sensibilité de chacun.",
  },
  {
    title: "Une sensibilité au bien-être",
    text: "Grâce à son approche autour de la sérénité, de l’équilibre et de la charge mentale, Anne-Sophie aide à retrouver un quotidien plus apaisé.",
  },
  {
    title: "Une interlocutrice unique",
    text: "Pas de plateforme impersonnelle : vous échangez avec une personne de confiance, présente, disponible et impliquée dans votre accompagnement.",
  },
];

export default function Trust() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Confiance
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Pourquoi me faire confiance ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            Parce qu’un accompagnement du quotidien ne repose pas seulement sur
            des services, mais sur une relation humaine, fiable et rassurante.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#D6B88A]/30 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-1 w-16 rounded-full bg-[#D6B88A]" />

              <h3 className="mb-4 text-2xl font-semibold text-[#0F5B6E]">
                {item.title}
              </h3>

              <p className="leading-8 text-[#3C3C3C]/75">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}