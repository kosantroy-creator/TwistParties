// Per-city content for local SEO landing pages. Each blurb is unique to avoid
// duplicate-content penalties. Edit freely as you learn each area's events.

export type Area = {
  slug: string;
  name: string;
  blurb: string;
  nearby: string[]; // slugs
};

export const serviceAreasData: Area[] = [
  { slug: "vancouver", name: "Vancouver", blurb: "From West End apartment parties to Kitsilano backyards and community festivals, we bring balloon colour all across Vancouver.", nearby: ["burnaby", "north-vancouver", "new-westminster"] },
  { slug: "delta", name: "Delta", blurb: "Ladner and North Delta birthdays, school fairs and community events — balloon twisting and decor across Delta.", nearby: ["tsawwassen", "surrey", "richmond"] },
  { slug: "surrey", name: "Surrey", blurb: "Big family birthdays, school events and city festivals across Surrey and South Surrey, with multiple artists for larger crowds.", nearby: ["delta", "langley", "new-westminster"] },
  { slug: "tsawwassen", name: "Tsawwassen", blurb: "Beachy birthdays and family gatherings in Tsawwassen, just minutes from the ferry terminal.", nearby: ["delta", "surrey"] },
  { slug: "burnaby", name: "Burnaby", blurb: "Birthday parties, school events and corporate picnics across Burnaby — from Metrotown to Deer Lake Park.", nearby: ["vancouver", "new-westminster", "coquitlam"] },
  { slug: "langley", name: "Langley", blurb: "Backyard birthdays and community events across Langley City and the Township.", nearby: ["surrey", "abbotsford"] },
  { slug: "abbotsford", name: "Abbotsford", blurb: "Family parties, school events and fairs across Abbotsford in the heart of the Fraser Valley.", nearby: ["langley", "mission", "chilliwack"] },
  { slug: "west-vancouver", name: "West Vancouver", blurb: "Elegant balloon decor and birthday twisting across West Vancouver and the British Properties.", nearby: ["north-vancouver", "vancouver"] },
  { slug: "north-vancouver", name: "North Vancouver", blurb: "Birthdays and community events from Lonsdale to Lynn Valley in North Vancouver.", nearby: ["west-vancouver", "vancouver"] },
  { slug: "maple-ridge", name: "Maple Ridge", blurb: "Backyard birthdays and park gatherings across Maple Ridge.", nearby: ["pitt-meadows", "coquitlam"] },
  { slug: "pitt-meadows", name: "Pitt Meadows", blurb: "Family birthdays and community events in Pitt Meadows.", nearby: ["maple-ridge", "port-coquitlam"] },
  { slug: "port-coquitlam", name: "Port Coquitlam", blurb: "Birthday parties and community events across Port Coquitlam.", nearby: ["coquitlam", "pitt-meadows"] },
  { slug: "coquitlam", name: "Coquitlam", blurb: "Birthdays, school events and festivals across Coquitlam and the Tri-Cities.", nearby: ["port-coquitlam", "burnaby"] },
  { slug: "new-westminster", name: "New Westminster", blurb: "Heritage-home birthdays, riverfront events and city festivals in New Westminster.", nearby: ["burnaby", "surrey", "vancouver"] },
  { slug: "mission", name: "Mission", blurb: "Family parties and community events across Mission in the Fraser Valley.", nearby: ["abbotsford", "agassiz"] },
  { slug: "agassiz", name: "Agassiz", blurb: "Country birthdays and community fairs in Agassiz and Harrison.", nearby: ["chilliwack", "mission"] },
  { slug: "chilliwack", name: "Chilliwack", blurb: "Family parties, school events and fairs across Chilliwack.", nearby: ["abbotsford", "agassiz"] },
  { slug: "squamish", name: "Squamish", blurb: "Mountain-town birthdays and community events in Squamish, on the Sea-to-Sky.", nearby: ["whistler", "west-vancouver"] },
  { slug: "whistler", name: "Whistler", blurb: "Resort birthdays, family events and celebrations in Whistler village and beyond.", nearby: ["squamish", "pemberton"] },
  { slug: "pemberton", name: "Pemberton", blurb: "Community events and family parties in Pemberton.", nearby: ["whistler", "squamish"] },
];

export const areaBySlug = (slug: string) =>
  serviceAreasData.find((a) => a.slug === slug);
