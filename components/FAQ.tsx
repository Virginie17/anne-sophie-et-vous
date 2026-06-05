const faqs = [
  {
    question: "Anne-Sophie intervient-elle uniquement à Angoulins ?",
    answer:
      "j'intervient principalement à Angoulins, La Rochelle et dans les communes alentours : Aytré, Châtelaillon-Plage, Périgny, La Jarne, Salles-sur-Mer et l’agglomération rochelaise.",
  },
  {
    question: "Les services s’adressent-ils aux seniors ?",
    answer:
      "Oui, j'accompagne notamment les seniors autonomes qui souhaitent une présence rassurante, une aide simple dans leur quotidien ou un accompagnement pour certaines sorties et démarches.",
  },
  {
    question: "Peut-elle aider les familles et les proches aidants ?",
    answer:
      "Oui. L’objectif est d’alléger la charge mentale des familles, d’apporter un relais de confiance et de proposer des solutions concrètes selon les besoins du quotidien.",
  },
  
  {
    question: "Le premier échange est-il gratuit ?",
    answer:
      "Oui, le premier échange découverte est offert. Il permet de comprendre votre besoin, votre situation et de voir comment Anne-Sophie peut vous accompagner.",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Questions fréquentes
          </p>

          <h2 className="brand-title text-4xl font-bold text-[#0F5B6E] md:text-5xl">
            Vous vous posez encore des questions ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            Voici les réponses aux questions les plus courantes avant de
            contacter Anne-Sophie & Vous.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.5rem] border border-[#D6B88A]/30 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold text-[#0F5B6E]">
                {faq.question}
              </h3>

              <p className="leading-8 text-[#3C3C3C]/75">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}