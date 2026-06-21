// Cornerstone blog posts (original content). Add more over time — each ranks for
// real search questions and feeds AI Overviews.

export type Block = { h?: string; p: string };
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "how-much-does-a-balloon-twister-cost-vancouver",
    title: "How much does a balloon twister cost in Vancouver?",
    excerpt: "A clear breakdown of balloon twisting pricing in the Lower Mainland — hourly rates, travel, group size and add-ons.",
    date: "2026-06-01",
    readMins: 3,
    body: [
      { p: "If you're planning a birthday or event in the Lower Mainland, one of the first questions is simple: what does a balloon twister actually cost? Here's how pricing usually works, using Twist Parties as an example." },
      { h: "The hourly rate", p: "Balloon twisting starts at $200 for one hour, plus a travel fee depending on your location. One hour comfortably covers up to about 15 children — enough time for each guest to choose and receive a balloon from the menu." },
      { h: "Bigger groups and events", p: "With more than 15 children, or for public events, schools and corporate picnics, a two-hour minimum applies — and we can bring multiple balloon artists so no one waits in a long line. Multi-hour and full-day rates are available on request." },
      { h: "What affects the final price", p: "Three things move the number: how many hours you book, your location (which sets the travel fee), and any add-ons — extra twisting time, mini twisting lessons, face painting, characters, mascots or party favours. Add-on pricing varies by performer, so we quote those per event." },
      { h: "The bottom line", p: "For a typical home birthday, plan for around $200 plus travel for an hour of balloon twisting. For a school or corporate event, budget for the two-hour minimum. The easiest way to get an exact number is to send your date, location and guest count for a quick quote." },
    ],
  },
  {
    slug: "how-many-balloons-per-hour",
    title: "How many balloons can a balloon artist make in an hour?",
    excerpt: "Roughly 15 detailed designs or 20–30 simple ones per hour — here's what that means for your party planning.",
    date: "2026-05-20",
    readMins: 2,
    body: [
      { p: "It's the practical question every host asks: will one balloon artist keep up with my guest list? Here's a realistic guide." },
      { h: "The numbers", p: "A skilled balloon artist makes roughly 15 detailed balloons per hour, or 20–30 simpler designs per hour. Detailed builds — characters, wearables, big sculptures — take longer; classics like swords, dogs and flowers move much faster." },
      { h: "Matching artists to guests", p: "That's why one hour suits up to about 15 children. If your guest list is larger, the fix is simple: add time, or add a second artist so two lines move at once. For festivals and corporate events, multiple artists keep the energy high and the wait short." },
      { h: "A smoother party", p: "A balloon menu helps too — when guests pick from a set list, the artist can work in a rhythm and every child knows what's coming. It keeps the line happy and the hour productive." },
    ],
  },
  {
    slug: "balloon-twisting-vs-balloon-decor",
    title: "Balloon twisting vs. balloon decor: what's the difference?",
    excerpt: "Two very different balloon services — one is live entertainment, the other is custom installation. Here's when to book each.",
    date: "2026-05-05",
    readMins: 3,
    body: [
      { p: "\"Balloons\" can mean two completely different things at an event. Knowing the difference helps you book the right service — or both." },
      { h: "Balloon twisting = live entertainment", p: "Balloon twisting is a performance. An artist arrives and makes custom balloons on the spot while guests watch and choose their favourites from a menu. It's interactive, keeps kids engaged, and every guest leaves with something they made a choice about. Think birthdays, school events, festivals and corporate picnics." },
      { h: "Balloon decor = custom installation", p: "Balloon decor is built, not performed. These are the statement pieces — balloon walls, arches, columns, organic garlands and photo frames — designed around your colours and theme and installed before guests arrive. It's about atmosphere and photos rather than live interaction." },
      { h: "Which do you need?", p: "Want to keep guests entertained during the party? Book twisting. Want a jaw-dropping backdrop or entrance? Book decor. Many events use both: a stunning garland for the photos and a balloon artist to delight the kids. Decor is custom, so it's quoted per project — just send your inspiration photos to start." },
    ],
  },
  {
    slug: "are-latex-balloons-biodegradable",
    title: "Are latex balloons biodegradable? Eco-friendly balloon facts",
    excerpt: "Natural latex balloons are biodegradable — here's what that means and how we keep balloon decor responsible.",
    date: "2026-04-18",
    readMins: 2,
    body: [
      { p: "If you love a good balloon display but worry about waste, here's some good news — and a few responsible-celebration tips." },
      { h: "Latex is a natural material", p: "Latex balloons are made from the sap of rubber trees, a natural product. That means natural latex balloons are biodegradable and break down over time, unlike foil (mylar) balloons, which are made from metallised plastic." },
      { h: "How we keep it responsible", p: "We use biodegradable latex balloons wherever possible and build decor with care so it looks incredible and cleans up properly. Foil balloons have their place for shapes and lettering, but we lean on latex for the big organic pieces." },
      { h: "Simple responsible-party tips", p: "Never release balloons outdoors — always pop and bin them after the event. Reuse foil shapes where you can, and ask your decorator about biodegradable options. A little planning keeps the colour high and the footprint low." },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
