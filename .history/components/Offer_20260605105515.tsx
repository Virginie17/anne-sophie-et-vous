export default function Offer() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#0F5B6E] p-8 text-center text-white shadow-2xl md:p-16">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
          Offre de lancement
        </p>

        <h2 className="brand-title mb-6 text-4xl font-bold md:text-5xl">
          Premier échange découverte offert
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/80">
          Un premier rendez-vous permet de faire le point sur vos besoins :
          accompagnement du quotidien, aide administrative simple, organisation,
          soutien aux seniors autonomes, charge mentale familiale ou services de
          proximité autour d&apos;Angoulins et La Rochelle.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-flex rounded-full bg-[#D6B88A] px-8 py-4 font-semibold text-[#0F5B6E] transition hover:-translate-y-1 hover:bg-white"
        >
          Demander mon échange offert
        </a>
      </div>
    </section>
  );
}