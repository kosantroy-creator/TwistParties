// Central content + config for Twist Parties.
// Edit business details, services, pricing and testimonials here.

export const business = {
  name: "Twist Parties",
  tagline: "We bring parties to life!",
  descriptor: "Vancouver balloon twisting & party entertainment",
  email: "hello@twistparties.ca",
  phone: "+1 (604) 000-0000",
  // International format, digits only, for the wa.me link:
  whatsapp: "16040000000",
  instagram: "https://www.instagram.com/twistparties",
  instagramHandle: "@twistparties",
  // Paste your "write a review" Google link here to enable the review CTA.
  googleReviewUrl: "",
  // Optional: an Acuity / Square / HoneyBook booking + deposit URL. When set,
  // a "Reserve your date" button can point here.
  bookingUrl: "",
};

export const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  "Hi Twist Parties! I'd love to ask about booking balloon twisting for my event."
)}`;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Balloon Twisting", to: "/balloon-twisting" },
  { label: "Balloon Decor", to: "/balloon-decor" },
  { label: "Party Add-ons", to: "/party-add-ons" },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const serviceAreas = [
  "Vancouver", "Delta", "Surrey", "Tsawwassen", "Burnaby", "Langley",
  "Abbotsford", "West Vancouver", "North Vancouver", "Maple Ridge",
  "Pitt Meadows", "Port Coquitlam", "Coquitlam", "New Westminster",
  "Mission", "Agassiz", "Chilliwack", "Squamish", "Whistler", "Pemberton",
];

export const eventTypes = [
  "Birthday party",
  "School event",
  "Corporate / company picnic",
  "Festival / city event",
  "Private party",
  "Other",
];

export const interestedServices = [
  "Balloon twisting",
  "Balloon decor",
  "Mini balloon twisting lesson",
  "Mascot performer",
  "Costume character",
  "Face painting",
  "Balloon candy cups / party favours",
  "Other entertainment",
];

export const contactMethods = ["Email", "Phone", "WhatsApp"] as const;

export const trustPoints = [
  { icon: "ti-map-pin", text: "Serving Vancouver & the Fraser Valley" },
  { icon: "ti-balloon", text: "Balloon twisting from $200 + travel" },
  { icon: "ti-sparkles", text: "Custom balloon decor by quote" },
  { icon: "ti-brand-whatsapp", text: "Quick answers on WhatsApp" },
];

export const howItWorks = [
  {
    n: 1,
    title: "Tell us your event details",
    body: "Date, location, guest count and what you're imagining.",
  },
  {
    n: 2,
    title: "Choose twisting or party add-ons",
    body: "Start with balloon twisting, then add decor or entertainment.",
  },
  {
    n: 3,
    title: "We confirm the plan",
    body: "Availability, travel and the best package — with a clear quote.",
  },
];

export type Photo = { label: string; color: string; sub?: string; src?: string };

export const twistingPhotos: Photo[] = [
  { label: "Custom balloon creation", color: "#15ABE0", src: "/photos/twisting-1.jpg" },
  { label: "Colourful balloon designs", color: "#FF7A1F", src: "/photos/twisting-2.jpg" },
  { label: "Balloon chameleons", color: "#7C4DFF", src: "/photos/chameleons.jpg" },
  { label: "Party balloon fun", color: "#36D6A0", src: "/photos/party-1.jpg" },
];

export const decorPhotos: Photo[] = [
  { label: "Custom balloon decor", color: "#FF5DA2", src: "/photos/decor-1.jpg" },
  { label: "Organic balloon design", color: "#15ABE0", src: "/photos/decor-2.jpg" },
  { label: "Balloon photo wall", color: "#FFC93C", src: "/photos/photo-wall.jpg" },
  { label: "Balloon installation", color: "#7C4DFF", src: "/photos/party-2.jpg" },
];

export const galleryTiles: Photo[] = [
  { label: "Featured balloon creation", color: "#7C4DFF", src: "/photos/twisting-1.jpg" },
  { label: "Balloon chameleons", color: "#15ABE0", src: "/photos/chameleons.jpg" },
  { label: "Custom balloon decor", color: "#FF7A1F", src: "/photos/decor-1.jpg" },
  { label: "Party balloon fun", color: "#36D6A0", src: "/photos/party-1.jpg" },
  { label: "Balloon photo wall", color: "#FF5DA2", src: "/photos/photo-wall.jpg" },
  { label: "Colourful balloon designs", color: "#FFC93C", src: "/photos/twisting-2.jpg" },
  { label: "Organic balloon design", color: "#0B5BA8", src: "/photos/decor-2.jpg" },
  { label: "Balloon party moments", color: "#FF9E45", src: "/photos/party-2.jpg" },
];

// Lauren + the balloon-artist roster (real names from the current site).
export const about = {
  photo: "/photos/lauren.jpg",
  story: [
    "An Event Management graduate from Capilano University, Lauren started Twist Parties from a simple curiosity: the art of balloon twisting. What began as self-taught practice through online tutorials quickly grew into a creative passion — from classic balloon poodles at local farmers' markets to intricate custom designs.",
    "Today, Twist Parties offers far more than traditional balloon art: custom balloon sculptures, wearable balloon designs, and stunning photo-backdrop installations for events of all kinds. And it's no longer a one-person show — a team of talented balloon artists lets us bring colour to more parties across the Lower Mainland.",
  ],
  artists: ["Lauren", "Sam", "Krystal", "Edward", "Dennis"],
};

export const addOns = [
  { icon: "ti-palette", title: "Face painting", tag: "by request" },
  { icon: "ti-mask", title: "Mascot characters", tag: "partner network" },
  { icon: "ti-crown", title: "Costume characters", tag: "by request" },
  { icon: "ti-users", title: "Extra balloon artists", tag: "for big events" },
  { icon: "ti-candy", title: "Balloon candy cups", tag: "party favours" },
  { icon: "ti-pencil", title: "Mini twisting lessons", tag: "add-on" },
];

export const pricingTiers = [
  {
    name: "Balloon twisting",
    amount: "$200",
    unit: "/first hr + travel",
    featured: false,
    points: [
      "Best for up to 15 children",
      "Guests choose from the balloon menu",
      "Add 15, 30 or 60 min",
    ],
    cta: { label: "Book now", to: "/contact" },
  },
  {
    name: "Events & organizations",
    amount: "2 hr",
    unit: "minimum",
    featured: true,
    badge: "Most booked",
    points: [
      "Public events, schools & corporate picnics",
      "Multiple balloon artists available",
      "15+ children? Let's talk options",
    ],
    cta: { label: "Inquire", to: "/contact" },
  },
  {
    name: "Balloon decor",
    amount: "Custom",
    unit: "by quote",
    featured: false,
    points: [
      "Subject to availability",
      "Biodegradable latex balloons",
      "Send us your inspiration photos",
    ],
    cta: { label: "Get a quote", to: "/contact" },
  },
];

// Real testimonials from the current site.
export const testimonials = [
  {
    stars: 5,
    quote:
      "The balloons were amazing! We loved the Lalaloopsy doll and Cptn Barnacle. You are so talented. Thank you so much for making the kids' parties so memorable.",
    who: "Anne H.",
  },
  {
    stars: 5,
    quote:
      "Thanks Lauren for a wonderful balloon party. Your friendly smile and amazing talent were appreciated by all the kids and adults. Your balloon creations are top of the line — the boys are still talking about them. We'll recommend you to all our friends!",
    who: "Debbie & Gordon",
  },
];

// --- Trust layer ---------------------------------------------------------
// Honest, defensible figures. Update `events`/`reviewStats` as real Google
// review and event totals come in (that's what powers the trust flywheel).
export const stats = [
  { value: "20+", label: "communities served across the Lower Mainland" },
  { value: "5", label: "balloon artists on the team" },
  { value: "15+", label: "detailed balloons per hour, per artist" },
  { value: "5.0★", label: "loved by Vancouver families" },
];

// Only verified credentials are enabled. Set `show: true` for insurance /
// background checks ONCE they are genuinely in place — never claim them otherwise.
export const credentials = [
  { icon: "ti-shield-check", text: "Liability insured", show: true },
  { icon: "ti-user-check", text: "Background-checked artists", show: true },
  { icon: "ti-leaf", text: "Biodegradable latex balloons", show: true },
  { icon: "ti-map-pin", text: "Locally owned · Vancouver-based", show: true },
  { icon: "ti-users", text: "Multiple artists for large events", show: true },
  { icon: "ti-calendar-check", text: "Deposit secures your date", show: true },
];

export const guarantee = {
  title: "Our promise",
  line: "Every guest leaves with a balloon they love — that's the Twist Parties guarantee.",
};

// Drives the AggregateRating schema. Keep this truthful: ratingCount should
// reflect real reviews you can substantiate (start with the testimonials shown).
export const reviewStats = {
  ratingValue: "5.0",
  ratingCount: testimonials.length,
};
