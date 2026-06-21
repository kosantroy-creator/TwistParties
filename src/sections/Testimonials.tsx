import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { testimonials, reviewStats, business } from "../lib/site";

export default function Testimonials() {
  return (
    <section className="gradient-cloud">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Loved locally"
          title="Loved by Vancouver families & planners"
          className="mb-6"
        />
        <div className="mb-10 flex items-center justify-center gap-2">
          <span className="text-2xl text-yellow" aria-hidden="true">★★★★★</span>
          <span className="text-sm font-semibold text-ink">
            {reviewStats.ratingValue} rating from happy clients
          </span>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.who}
              className="flex flex-col rounded-[var(--radius-card)] border border-hairline bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="text-xl text-yellow" aria-label={`${t.stars} out of 5 stars`}>
                {"★".repeat(t.stars)}
              </div>
              <blockquote className="mt-3 flex-1 text-base leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-deepsea">
                — {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
        {business.googleReviewUrl && (
          <div className="mt-9 text-center">
            <Button href={business.googleReviewUrl} variant="outline" icon="ti-star">
              Leave us a review
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
