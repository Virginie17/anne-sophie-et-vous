const email = "contact@anne-sophie-et-vous.fr";

export default function PolitiqueConfidentialitePage() {
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
          Données personnelles
        </p>

        <h1 className="brand-title mb-8 text-4xl font-bold text-[#0F5B6E] md:text-5xl">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 leading-8 text-[#3C3C3C]/80">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Collecte des données
            </h2>
            <p>
              Les données personnelles éventuellement collectées via ce site sont
              celles transmises volontairement par l’utilisateur lors d’une prise
              de contact, notamment le nom, l’adresse email, le numéro de
              téléphone et le message envoyé.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Finalité du traitement
            </h2>
            <p>
              Ces données sont utilisées uniquement pour répondre aux demandes de
              contact, organiser un premier échange découverte ou proposer un
              accompagnement adapté.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Conservation des données
            </h2>
            <p>
              Les données sont conservées pendant une durée raisonnable
              nécessaire au suivi de la demande, sauf obligation légale contraire
              ou demande de suppression de la part de l’utilisateur.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Partage des données
            </h2>
            <p>
              Les données personnelles ne sont ni vendues, ni louées, ni cédées à
              des tiers. Elles sont uniquement utilisées dans le cadre de la
              relation entre Anne-Sophie & Vous et la personne ayant pris
              contact.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Droits des utilisateurs
            </h2>
            <p>
              Conformément à la réglementation applicable, chaque utilisateur
              peut demander l’accès, la rectification ou la suppression de ses
              données personnelles en écrivant à l’adresse suivante : {email}.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#0F5B6E]">
              Cookies
            </h2>
            <p>
              À ce stade, le site n’utilise pas de cookies de suivi
              publicitaire. Si des outils de mesure d’audience sont ajoutés
              ultérieurement, cette politique sera mise à jour.
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