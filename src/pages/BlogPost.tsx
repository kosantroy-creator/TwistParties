import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import CTABand from "../components/CTABand";
import Button from "../components/Button";
import NotFound from "./NotFound";
import { postBySlug } from "../lib/posts";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = postBySlug(slug);

  // Inject Article structured data for this post.
  useEffect(() => {
    if (!post) return;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Organization", name: "Twist Parties" },
      publisher: { "@type": "Organization", name: "Twist Parties" },
      mainEntityOfPage: `https://www.twistparties.ca/blog/${post.slug}`,
    });
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <>
      <Seo title={`${post.title} | Twist Parties`} description={post.excerpt} />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-twist">
          <i className="ti ti-arrow-left" aria-hidden="true" /> All posts
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-sky">
          {fmt(post.date)} · {post.readMins} min read
        </p>
        <h1 className="mt-2 text-4xl leading-tight">{post.title}</h1>

        <div className="mt-8 space-y-6">
          {post.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="mb-2 text-xl text-deepsea">{b.h}</h2>}
              <p className="text-lg leading-relaxed text-slatey">{b.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-hairline pt-8">
          <Button to="/contact" icon="ti-balloon">Book balloon twisting</Button>
          <Button to="/pricing" variant="outline">See pricing</Button>
        </div>
      </article>

      <CTABand />
    </>
  );
}
