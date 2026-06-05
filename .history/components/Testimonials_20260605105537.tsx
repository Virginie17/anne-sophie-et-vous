const testimonials = [
  {
    name: "Claire, La Rochelle",
    text: "Une présence rassurante, une écoute sincère et des solutions concrètes pour alléger mon quotidien.",
  },
  {
    name: "Marie, Angoulins",
    text: "Anne-Sophie apporte de la douceur, de l&apos;organisation et beaucoup de bienveillance.",
  },
  {
    name: "Jean, proche aidant",
    text: "Un accompagnement humain précieux pour mieux organiser le quotidien d&apos;un parent senior.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Témoignages
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Ils pourraient lui faire confiance.
          </h2>

          <p className="mt-6 text-sm text-[#3C3C3C]/60">
            Témoignages provisoires à remplacer par de vrais retours clients
            après les premiers accompagnements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-[#D6B88A]/30 bg-[#FAF7F2] p-8"
            >
              <p
                className="mb-6 leading-8 text-[#3C3C3C]/75"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />

              <p className="font-semibold text-[#0F5B6E]">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}