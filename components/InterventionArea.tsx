const cities = [
  "Angoulins",
  "La Rochelle",
  "Aytré",
  "Châtelaillon-Plage",
  "Périgny",
  "Salles-sur-Mer",
  "Saint-Vivien",
  "La Jarne",
  "Yves",
  "Agglomération rochelaise",
];

export default function InterventionArea() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
            Zone d’intervention
          </p>

          <h2 className="brand-title text-4xl font-bold leading-tight text-[#0F5B6E] md:text-5xl">
            Un accompagnement de proximité autour d’Angoulins et La Rochelle.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#3C3C3C]/75">
            J&aposinterviens principalement à Angoulins, La
            Rochelle et dans les communes alentours pour accompagner les
            familles, les seniors autonomes et les particuliers dans leur
            quotidien.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#3C3C3C]/75">
            Une demande en dehors de cette zone ? Contactez-moi, nous
            étudierons ensemble les possibilités.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-[#FAF7F2] p-8 shadow-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {cities.map((city) => (
              <div
                key={city}
                className="rounded-2xl border border-[#D6B88A]/30 bg-white p-5 text-center font-medium text-[#0F5B6E] shadow-sm"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}