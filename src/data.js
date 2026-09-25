// Non-translated config: personal details + per-project visual settings.
// All copy lives in src/i18n.jsx.

export const ME = {
  email: "smsazzawi@gmail.com",
  phone: "0585855878",
  whatsapp: "971585855878", // UAE international format for wa.me
  waMessage: "Hi Salem, I'd like a website for my company.",
  years: 4,
  websites: 20,
  handle: "salem@portfolio",
};

// Cal.com scheduling page — used by every "Book a call" CTA.
export const CAL_LINK = "https://cal.com/salem-alazzawi-mqxrcn/15min";
export const calLink = () => CAL_LINK;

export const waLink = () =>
  `https://wa.me/${ME.whatsapp}?text=${encodeURIComponent(ME.waMessage)}`;

// Visual config per project, matched by index to i18n work.projects.
const TAGS = ["#10b981", "#f43f5e", "#a855f7"];
export const PROJECT_VISUALS = [
  {
    // Marina Decor
    accent: "#8a7a63",
    live: "#",
    shot: "/assets/marina-featured.jpg",
    tagColors: TAGS,
    // light / dark / light / dark / light
    gallery: [
      "/assets/marina-about.jpg",
      "/assets/marina.jpg",
      "/assets/marina-projects.jpg",
      "/assets/marina-ideas.jpg",
      "/assets/marina-featured.jpg",
    ],
  },
  {
    // ZAN
    accent: "#b98a5e",
    live: "#",
    shot: "/assets/zan-products.jpg",
    tagColors: TAGS,
    gallery: ["/assets/zan-hero.jpg", "/assets/zan-info.jpg", "/assets/zan-products.jpg", "/assets/zan-product.jpg", "/assets/zan-dash.jpg"],
  },
  {
    // Amolfi Studio
    accent: "#7a6f60",
    live: "#",
    shot: "/assets/amolfi.jpg",
    tagColors: TAGS,
    gallery: ["/assets/amolfi.jpg", "/assets/amolfi2.jpg"],
  },
  {
    // Velum
    accent: "#8c8377",
    live: "#",
    shot: "/assets/velum.jpg",
    tagColors: TAGS,
    gallery: ["/assets/velum.jpg", "/assets/velum2.jpg", "/assets/velum3.jpg", "/assets/velum4.jpg"],
  },
];

// Display order of projects (indexes into PROJECT_VISUALS / i18n work.projects):
// Amolfi, Velum, Marina, ZAN.
export const PROJECT_ORDER = [2, 3, 0, 1];

export const FILE_VERSIONS = [
  "final",
  "final-v2",
  "FINALL",
  "final-FINAL",
  "ACTUALLY-final",
  "FINAL-FINAL-v3",
  "use-this-one",
  "final-for-real",
];

