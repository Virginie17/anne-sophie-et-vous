const targets = [
  "Vous manquez de temps dans votre quotidien.",
  "Vous accompagnez un proche senior et vous avez besoin de relais.",
  "Vous souhaitez alléger votre charge mentale familiale.",
  "Vous recherchez une personne de confiance à Angoulins, La Rochelle ou alentours.",
  "Vous avez besoin d&apos;un accompagnement humain, ponctuel ou régulier.",
];

export default function ForWho() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Pour qui ?
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Vous vous reconnaissez dans ces situations ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            Anne-Sophie & Vous s&apos;adresse aux familles, aux seniors autonomes
            et aux particuliers qui souhaitent retrouver du temps, de l&apos;équilibre
            et de la sérénité.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {targets.map((target) => (
            <div
              key={target}
              className="rounded-[1.5rem] border border-[#D6B88A]/30 bg-[#FAF7F2] p-6 text-lg text-[#3C3C3C]/80"
            >
              ✓ <span dangerouslySetInnerHTML={{ __html: target }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}