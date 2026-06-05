const phone = "07.62.47.06.63";
const email = "contact@anne-sophie-et-vous.fr";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D6B88A]/30 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href="tel:+33762470663"
          className="flex-1 rounded-full bg-[#0F5B6E] px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Appelez moi
        </a>

        <a
          href={`mailto:${email}`}
          className="flex-1 rounded-full border border-[#D6B88A] bg-[#FAF7F2] px-4 py-3 text-center text-sm font-semibold text-[#0F5B6E]"
        >
          Écrivez moi
        </a>
      </div>
    </div>
  );
}