// Original website-preview mockups for interior / fit-out site projects.
// Warm image blocks stand in for interior photography — all drawn with CSS.

function Gallery({ tones }) {
  return (
    <div className="site__gallery">
      {tones.map((t, i) => (
        <span key={i} style={{ background: t }} />
      ))}
    </div>
  );
}

function DesktopSite({ accent, hero, tones, dark, cta }) {
  return (
    <div className={`mock-browser ${dark ? "mock-browser--dark" : ""}`}>
      <div className="mock-browser__bar">
        <span className="tl tl--r" />
        <span className="tl tl--y" />
        <span className="tl tl--g" />
        <span className="mock-url" />
      </div>
      <div className="site">
        <div className="site__nav">
          <span className="site__logo" style={{ background: accent }} />
          <span className="site__links">
            <i /><i /><i />
          </span>
          <span className="site__navcta" style={{ background: accent }} />
        </div>
        <div className="site__hero" style={{ background: hero }}>
          <span className="site__hero-title" />
          <span className="site__hero-title site__hero-title--sm" />
          {cta && <span className="site__hero-cta" style={{ background: accent }} />}
        </div>
        <Gallery tones={tones} />
      </div>
    </div>
  );
}

function MobileSite({ accent, hero, tones }) {
  return (
    <div className="mock-phone">
      <div className="mock-phone__notch" />
      <div className="mock-phone__screen mock-phone__screen--site">
        <div className="site__mnav">
          <span className="site__logo" style={{ background: accent }} />
          <span className="site__burger">
            <i /><i /><i />
          </span>
        </div>
        <div className="site__hero site__hero--m" style={{ background: hero }}>
          <span className="site__hero-title" />
          <span className="site__hero-title site__hero-title--sm" />
        </div>
        <div className="site__gallery site__gallery--m">
          {tones.map((t, i) => (
            <span key={i} style={{ background: t }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Warm interior-flavoured palettes per project (index-matched to PROJECT_VISUALS).
const PRESETS = [
  {
    // Aura Interiors — mobile site, terracotta
    kind: "mobile",
    hero: "linear-gradient(150deg, #c2703d, #7c3f22)",
    tones: ["#e7d3b3", "#3a2a20", "#c9a37a", "#8a5a38"],
  },
  {
    // Nür Fit-Out — desktop corporate, deep tone
    kind: "desktop",
    dark: true,
    hero: "linear-gradient(150deg, #2b3a4a, #16202b)",
    tones: ["#4a5b6b", "#8a9aa8", "#3a4a58"],
    cta: true,
  },
  {
    // Majlis Studio — desktop portfolio, warm sand
    kind: "desktop",
    hero: "linear-gradient(150deg, #d8c3a5, #a9855c)",
    tones: ["#efe3cf", "#7c5a3a", "#c4a074"],
  },
  {
    // Concept Contracting — desktop landing, accent
    kind: "desktop",
    hero: "linear-gradient(150deg, #6366f1, #4338ca)",
    tones: ["#c7d2fe", "#4f46e5", "#818cf8"],
    cta: true,
  },
];

export default function Mockup({ index = 0, accent, shot }) {
  const p = PRESETS[index % PRESETS.length];
  return (
    <div className="mockup-stack">
      <span className="mockup-stack__ghost mockup-stack__ghost--2" />
      <span className="mockup-stack__ghost mockup-stack__ghost--1" />
      <div className="mockup-stack__front">
        {shot ? (
          <div className="mock-browser mock-shot" dir="ltr">
            <div className="mock-browser__bar">
              <span className="tl tl--r" />
              <span className="tl tl--y" />
              <span className="tl tl--g" />
              <span className="mock-url" />
            </div>
            <img src={shot} alt="" loading="lazy" />
          </div>
        ) : p.kind === "mobile" ? (
          <MobileSite accent={accent} hero={p.hero} tones={p.tones} />
        ) : (
          <DesktopSite accent={accent} hero={p.hero} tones={p.tones} dark={p.dark} cta={p.cta} />
        )}
      </div>
    </div>
  );
}
