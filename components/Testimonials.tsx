const expectations = [
  {
    title: "Une écoute attentive",
    text: "Anne-Sophie prend le temps de comprendre votre situation, vos priorités et votre rythme avant de proposer un accompagnement.",
  },
  {
    title: "Des solutions personnalisées",
    text: "Chaque besoin est différent. L’accompagnement est donc adapté à votre quotidien, à votre famille ou à la situation de votre proche.",
  },
  {
    title: "Une relation de confiance",
    text: "Vous êtes accompagné par une personne identifiée, fiable et bienveillante, avec qui la relation peut se construire dans la durée.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Mes engagements
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Ce que vous pouvez attendre de moi.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            Avant même les premiers témoignages clients, l’engagement est clair :
            vous apporter une aide humaine, fiable et adaptée à votre quotidien.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {expectations.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#D6B88A]/30 bg-[#FAF7F2] p-8"
            >
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