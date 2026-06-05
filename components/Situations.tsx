const situations = [
  "Vous êtes débordé entre le travail, la famille et les démarches du quotidien.",
  "Vous accompagnez un parent senior, mais vous ne pouvez pas être présent chaque jour.",
  "Vous avez besoin d’une personne de confiance pour une sortie, un rendez-vous ou une démarche.",
  "Vous souhaitez alléger votre charge mentale et retrouver un quotidien plus simple.",
  "Vous cherchez une présence humaine, rassurante et régulière autour d’Angoulins ou La Rochelle.",
];

export default function Situations() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1fr] md:items-center">
        <div className="rounded-[2.5rem] bg-[#0F5B6E] p-8 text-white shadow-2xl md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Situations concrètes
          </p>

          <h2 className="brand-title text-4xl font-bold leading-tight md:text-5xl">
            Des moments du quotidien où je peux vous aider.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            L’objectif n’est pas simplement de rendre un service, mais
            d’apporter une présence, une solution et un vrai soulagement.
          </p>
        </div>

        <div className="space-y-4">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-2xl border border-[#D6B88A]/30 bg-[#FAF7F2] p-6 text-lg leading-8 text-[#3C3C3C]/80 shadow-sm"
            >
              ✓ {situation}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}