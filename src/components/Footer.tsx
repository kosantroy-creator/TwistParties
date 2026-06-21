import { Link } from "react-router-dom";
import Logo from "./Logo";
import { business, nav, serviceAreas, whatsappLink } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#9fb0c9]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="light" className="text-2xl" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              {business.descriptor}. {business.tagline}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 hover:border-tangerine hover:text-white"
              >
                <i className="ti ti-brand-instagram text-xl" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 hover:border-mint hover:text-white"
              >
                <i className="ti ti-brand-whatsapp text-xl" />
              </a>
              <a
                href={`mailto:${business.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 hover:border-sky hover:text-white"
              >
                <i className="ti ti-mail text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="!text-white text-base">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link to="/service-areas" className="hover:text-white">Service areas</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="!text-white text-base">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={business.instagram} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-white/50">
            Proudly serving
          </p>
          <p className="mt-2 text-sm leading-7 text-[#c7d3e6]">
            {serviceAreas.join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
          <span className="inline-flex items-center gap-1.5"><i className="ti ti-leaf text-mint" aria-hidden="true" /> Biodegradable latex balloons · {business.tagline}</span>
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
