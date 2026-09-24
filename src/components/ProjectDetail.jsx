import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "../i18n";
import { PROJECT_VISUALS, calLink } from "../data";
import Mockup from "./Mockups";
import { ArrowLeft, Close, Check, ExternalLink, Calendar } from "./icons";

export default function ProjectDetail({ index, onClose }) {
  const { t, dir } = useI18n();
  const p = t.work.projects[index];
  const v = PROJECT_VISUALS[index];
  const d = t.work.detail;
  const external = v.live && v.live !== "#";
  const [notLive, setNotLive] = useState(false);

  // Lock body scroll + close on Escape while the page is open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Auto-dismiss the "not live" toast.
  useEffect(() => {
    if (!notLive) return;
    const id = setTimeout(() => setNotLive(false), 2600);
    return () => clearTimeout(id);
  }, [notLive]);

  const onVisit = (e) => {
    if (!external) {
      e.preventDefault();
      setNotLive(true);
    }
  };

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } };
  const rise = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      className="pdetail"
      dir={dir}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="pdetail__panel"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pdetail__bar">
          <button className="pdetail__back" onClick={onClose}>
            <ArrowLeft size={18} style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }} />
            {d.back}
          </button>
          <button className="pdetail__close" onClick={onClose} aria-label="Close">
            <Close size={20} />
          </button>
        </div>

        <motion.div className="pdetail__body" variants={stagger} initial="hidden" animate="show">
          <motion.div className="pdetail__hero" variants={rise}>
            <div className="pdetail__preview" style={{ background: `${v.accent}14` }}>
              {v.shot ? (
                <img className="pdetail__shot" src={v.shot} alt={p.name} />
              ) : (
                <Mockup index={index} accent={v.accent} />
              )}
            </div>
            <div className="pdetail__intro">
              <div className="pdetail__tags">
                {p.tags.map((tag, i) => (
                  <span key={tag} className="proj__tag" style={{ color: v.tagColors[i] }}>
                    <span className="proj__tag-dot" style={{ background: v.tagColors[i] }} />
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="pdetail__title">{p.name}</h2>
              <p className="pdetail__meta">{p.meta}</p>
              <div className="pdetail__facts">
                <div>
                  <span className="pdetail__fact-label">{d.role}</span>
                  <span className="pdetail__fact-value">{p.role}</span>
                </div>
                <div>
                  <span className="pdetail__fact-label">{d.year}</span>
                  <span className="pdetail__fact-value">{p.year}</span>
                </div>
              </div>
              <div className="pdetail__actions">
                <a className="btn btn--rose" href={calLink()} target="_blank" rel="noreferrer">
                  {d.book}
                </a>
                <a
                  className="btn btn--ghost"
                  href={v.live}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  onClick={onVisit}
                >
                  {d.visit}
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.section className="pdetail__section" variants={rise}>
            <h3 className="pdetail__h">{d.overview}</h3>
            <p className="pdetail__lead">{p.overview}</p>
          </motion.section>

          <div className="pdetail__cols">
            <motion.section className="pdetail__section" variants={rise}>
              <h3 className="pdetail__h">{d.services}</h3>
              <div className="pdetail__services">
                {p.services.map((s) => (
                  <span key={s} className="pdetail__service">
                    {s}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section className="pdetail__section" variants={rise}>
              <h3 className="pdetail__h">{d.highlights}</h3>
              <ul className="pdetail__highlights">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <span className="feat-check">
                      <Check size={13} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.div className="pdetail__result" variants={rise} style={{ borderColor: `${v.accent}55` }}>
            <span className="pdetail__result-label">{d.result}</span>
            <span className="pdetail__result-value">{p.result}</span>
          </motion.div>

          <motion.div className="pdetail__gallery" variants={rise}>
            {v.gallery.map((g, i) => (
              <img
                key={g}
                src={g}
                alt={`${p.name} ${i + 1}`}
                loading="lazy"
                data-wide={v.gallery.length !== 2 && i === 0}
                style={g.includes("zan-hero") ? { objectPosition: "center 64%" } : undefined}
              />
            ))}
          </motion.div>

          <motion.a
            className="pdetail__cta"
            href={calLink()}
            target="_blank"
            rel="noreferrer"
            variants={rise}
          >
            <span className="hero__cta-icon">
              <Calendar size={30} />
            </span>
            <span className="hero__cta-text">
              <strong>{d.book}</strong>
              <small>{t.hero.ctaSub}</small>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {notLive && (
          <motion.div
            className="pdetail__toast"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {d.notLive}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
