import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Avatar } from "./ui";
import { Chevron, Calendar, Globe, Check } from "./icons";
import { useI18n } from "../i18n";
import { calLink } from "../data";

// Language-aware fonts: Latin display faces for EN, real Arabic faces for AR
// (Latin fonts can't render Arabic, so the AR list uses Arabic typefaces).
const EN_FONTS = [
  { label: "Gemunu Libre", css: '"Gemunu Libre", sans-serif' },
  { label: "Poppins", css: '"Poppins", sans-serif' },
  { label: "Geist Mono", css: '"Geist Mono", monospace' },
];
const AR_FONTS = [
  { label: "القاهرة", css: '"Cairo", sans-serif' },
  { label: "تجوّل", css: '"Tajawal", sans-serif' },
  { label: "عارف رقعة", css: '"Aref Ruqaa", serif' },
];

// Robust dropdown: toggles on click, closes on outside click (not on mouseleave,
// which was the bug — the panel sits below the trigger, outside its hover box).
function Dropdown({ trigger, width, children, dir }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="dd" style={{ width }} dir={dir} ref={ref}>
      <button
        type="button"
        className="dd__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {trigger}
        <Chevron size={14} style={{ opacity: 0.5, transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      {open && <div className="dd__panel">{children(() => setOpen(false))}</div>}
    </div>
  );
}

export default function Hero() {
  const { t, lang, setLang, dir } = useI18n();
  const [fontIdx, setFontIdx] = useState(0);
  const FONTS = lang === "ar" ? AR_FONTS : EN_FONTS;
  const font = FONTS[fontIdx] || FONTS[0];
  const { scrollY } = useScroll();
  const topoY = useTransform(scrollY, [0, 700], [0, 120]);
  const topoOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  const LANGS = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  return (
    <section id="top" className="hero">
      <motion.div className="hero__topo" style={{ y: topoY, opacity: topoOpacity }} aria-hidden />

      <motion.div className="hero__inner" variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Avatar size={156} src="/assets/hero.jpg" pos="center 14%" />
        </motion.div>

        <motion.div className="hero__picker" variants={item}>
          <Dropdown
            width={188}
            dir={dir}
            trigger={
              <span className="dd__value" style={{ fontFamily: font.css }}>
                {font.label}
              </span>
            }
          >
            {(close) => (
              <ul className="dd__list">
                {FONTS.map((f, i) => (
                  <li
                    key={f.label}
                    className={i === fontIdx ? "is-active" : ""}
                    onClick={() => {
                      setFontIdx(i);
                      close();
                    }}
                    style={{ fontFamily: f.css }}
                  >
                    {f.label}
                    {i === fontIdx && <Check size={14} />}
                  </li>
                ))}
              </ul>
            )}
          </Dropdown>

          <span className="hero__picker-sep" />

          <Dropdown
            width={132}
            dir={dir}
            trigger={
              <span className="dd__value dd__value--lang">
                <Globe size={15} />
                {lang === "en" ? "English" : "العربية"}
              </span>
            }
          >
            {(close) => (
              <ul className="dd__list">
                {LANGS.map((l) => (
                  <li
                    key={l.code}
                    className={l.code === lang ? "is-active" : ""}
                    onClick={() => {
                      setLang(l.code);
                      close();
                    }}
                  >
                    {l.label}
                    {l.code === lang && <Check size={14} />}
                  </li>
                ))}
              </ul>
            )}
          </Dropdown>
        </motion.div>

        <motion.h2
          className="hero__hello"
          variants={item}
          style={{ fontFamily: font.css }}
        >
          <span className="bracket bracket--l" />
          {t.hero.helloPrefix} {t.hero.name}
          <span className="bracket bracket--r" />
        </motion.h2>

        <motion.h1 className="hero__title" variants={item}>
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </motion.h1>

        <motion.a
          className="hero__cta"
          href={calLink()}
          target="_blank"
          rel="noreferrer"
          variants={item}
          whileHover={{ scale: 1.035, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="hero__cta-icon">
            <Calendar size={30} />
          </span>
          <span className="hero__cta-text">
            <strong>{t.hero.ctaTitle}</strong>
            <small>{t.hero.ctaSub}</small>
          </span>
        </motion.a>
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="hero__mouse">
          <span className="hero__mouse-dot" />
        </span>
      </motion.div>
    </section>
  );
}
