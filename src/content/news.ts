import type { NewsArticle } from "@/types/content";

export const news: NewsArticle[] = [
  {
    slug: "india-manufacturing-expansion",
    category: "Corporate",
    title: "Lyntek expands its regional manufacturing network in India",
    excerpt:
      "A strategic partnership supports selected smart home assembly, testing, and export operations.",
    date: "2026-07-18",
    readTime: "3 min read",
    author: "Lyntek Communications",
    accent: "from-cyan-400/30 to-blue-800/10",
    body: [
      "Lyntek Electronics Co., Ltd. has established a strategic manufacturing partnership with Shreesha Tech Global Pvt. Ltd. in Surat, Gujarat, India. The collaboration supports regional production of selected smart-home products, OEM manufacturing, product assembly, testing, and export operations.",
      "Taipei remains Lyntek’s headquarters for product strategy, electronics architecture, embedded software, validation planning, and brand direction. The India partnership expands execution capacity for programs that benefit from regional assembly and logistics, without changing ownership or brand accountability.",
      "For customers, the model is intentionally clear: Lyntek defines product requirements and engineering standards, while manufacturing partners contribute scoped production and test capabilities. Acceptance criteria, change control, and quality feedback remain part of the shared program process.",
      "As product families mature, Lyntek will continue evaluating regional manufacturing options based on volume, market access, supply-chain resilience, and the technical needs of each platform.",
    ],
  },
  {
    slug: "matter-design-principles",
    category: "Engineering",
    title: "Designing dependable Matter products beyond commissioning",
    excerpt:
      "Why interoperability, local behavior, lifecycle security, and field diagnostics must be designed together.",
    date: "2026-06-04",
    readTime: "6 min read",
    author: "Lyntek Engineering",
    accent: "from-violet-400/25 to-cyan-800/10",
    body: [
      "Matter has raised expectations for smart-home interoperability. For product teams, the harder work begins after a device commissions successfully. Dependable products also need clear local behavior, resilient networking, maintainable firmware, and diagnostics that make field issues understandable.",
      "At Lyntek, we treat Matter as one layer in a complete product architecture. Device identity, secure onboarding, OTA update strategy, power and thermal constraints, user-interface feedback, and recovery paths all influence whether a connected product feels reliable in daily use.",
      "Local control remains essential. Cloud services can enrich scenes, remote access, and analytics, but core switching, dimming, and status feedback should remain predictable when networks degrade. That principle applies equally to gateways, hubs, and endpoint devices.",
      "Interoperability testing should also extend beyond the lab’s happy path. Mixed ecosystems, delayed firmware updates, Thread topology changes, and partial network failures are common in real homes. Designing for those conditions early reduces support cost and protects brand trust.",
      "Our recommendation to partners is practical: define the user journeys that matter most, map them to protocol and system requirements, then verify them with staged evidence. Matter compliance is necessary. Product dependability is the real goal.",
    ],
  },
  {
    slug: "edge-intelligence-industrial-systems",
    category: "Engineering",
    title: "Where edge intelligence creates practical industrial value",
    excerpt:
      "A grounded look at latency, resilience, and bandwidth in connected industrial equipment.",
    date: "2026-04-22",
    readTime: "5 min read",
    author: "Lyntek Engineering",
    accent: "from-blue-400/25 to-slate-800/10",
    body: [
      "Edge intelligence is often discussed as a technology trend. In industrial systems, it is more useful to treat it as an architectural response to latency, resilience, bandwidth, and privacy constraints.",
      "When machines need immediate decisions, waiting for cloud round-trips can be unacceptable. Local inference and rule execution can keep processes responsive even when connectivity is intermittent. That does not eliminate the cloud; it clarifies which workloads belong near the equipment and which belong in centralized systems.",
      "Bandwidth economics matter too. Streaming every raw signal can be expensive and unnecessary. An edge gateway that filters, summarizes, and prioritizes data can reduce cost while preserving operational visibility. The same approach can limit exposure of sensitive process information.",
      "Successful deployments start with a clear decision: which outcomes improve if compute moves closer to the process? Visual inspection, anomaly detection, protocol translation, and local buffering are common candidates. Speculative AI features without an operational owner rarely deliver value.",
      "Lyntek designs edge platforms around that discipline—pairing industrial connectivity, secure device management, and application flexibility so customers can place intelligence where the process actually needs it.",
    ],
  },
];

export function getArticle(slug: string) {
  return news.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 2) {
  return news.filter((article) => article.slug !== slug).slice(0, limit);
}
