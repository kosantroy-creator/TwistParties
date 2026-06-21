import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import CTABand from "../components/CTABand";
import { posts } from "../lib/posts";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

export default function Blog() {
  return (
    <>
      <Seo
        title="Balloon Party Tips & Ideas | Twist Parties Blog"
        description="Balloon twisting and party planning tips for Vancouver families and event planners — pricing, ideas, eco-friendly balloons and more."
      />
      <PageHero
        eyebrow="Tips & ideas"
        title="The Twist Parties blog"
        subtitle="Helpful answers and party inspiration — from what a balloon twister costs to eco-friendly balloon facts."
        ctaLabel="Book Your Party"
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group flex flex-col rounded-[var(--radius-card)] border border-hairline bg-white p-7 shadow-[var(--shadow-soft)] transition hover:border-sky"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-sky">
                {fmt(p.date)} · {p.readMins} min read
              </p>
              <h2 className="mt-2 text-xl text-ink group-hover:text-twist">{p.title}</h2>
              <p className="mt-2 flex-1 text-slatey">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-twist">
                Read more <i className="ti ti-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
