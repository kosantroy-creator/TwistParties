import { Link } from "react-router-dom";
import { whatsappLink } from "../lib/site";
import { useButtonFx } from "../lib/buttonFx";

/** Sticky bottom action bar — visible on phones only. */
export default function MobileBar() {
  // Magnetic off (small fixed bar), keep the springy press/scale.
  const bookFx = useButtonFx<HTMLAnchorElement>(false);
  const waFx = useButtonFx<HTMLAnchorElement>(false);
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-white/95 px-3 py-2.5 backdrop-blur-md sm:hidden">
      <div className="mx-auto flex max-w-md gap-2.5">
        <Link
          ref={bookFx}
          to="/contact"
          className="btn-shine relative overflow-hidden flex flex-1 items-center justify-center gap-2 rounded-full bg-twist py-3.5 font-body font-semibold text-white"
        >
          <i className="ti ti-balloon text-lg" aria-hidden="true" /> Book Now
        </Link>
        <a
          ref={waFx}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine relative overflow-hidden flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-body font-semibold text-white"
        >
          <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
