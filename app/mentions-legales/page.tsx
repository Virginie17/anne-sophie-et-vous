const phone = "06 00 00 00 00";
const email = "contact@anne-sophie-et-vous.fr";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 py-20 text-[#3C3C3C]">
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
        <a
          href="/"
          className="mb-8 inline-flex text-sm font-medium text-[#0F5B6E] hover:underline"
        >
          Retour à l&apos;accueil
        </a>

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D6B88A]">
          Informations légales
        </p>

        <h1 className="brand-title mb-8 text-4xl font-bold text-[#0F5B6E] md:text-5xl">
          Mentions légales
        </h1>

        <div className="space-y-8 leading-8 text-[#3C3C3C]/80">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Éditeur du site
            </h2>
            <p>
              Le site Anne-Sophie & Vous est édité par Anne-Sophie Deschamps,
              auto-entrepreneure, votre alliée du quotidien à Angoulins, La
              Rochelle et alentours.
            </p>
            <p className="mt-2">
              Téléphone : {phone}
              <br />
              Email : {email}
            </p>
            <p className="mt-2">
              SIRET : à compléter
              <br />
              Adresse professionnelle : à compléter
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Responsable de publication
            </h2>
            <p>Anne-Sophie Deschamps.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Hébergement
            </h2>
            <p>
              Site hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
              CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus présents sur ce site, incluant les textes,
              visuels, graphismes, logo et éléments de marque, est protégé par
              le droit de la propriété intellectuelle. Toute reproduction,
              modification ou diffusion sans autorisation préalable est
              interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Responsabilité
            </h2>
            <p>
              Les informations présentes sur ce site sont fournies à titre
              indicatif. Anne-Sophie & Vous s’efforce de les maintenir à jour,
              mais ne peut garantir l’absence d’erreur ou d’omission.
            </p>
          </section>

          <p className="text-sm text-[#3C3C3C]/60">
            Dernière mise à jour : juin 2026.
          </p>
        </div>
      </section>
    </main>
  );
}