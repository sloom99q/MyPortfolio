import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ME, waLink, calLink } from "../data";
import { useI18n } from "../i18n";
import { Reveal, Eyebrow } from "./ui";
import { Plus, Calendar } from "./icons";

function Item({ item, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`} onClick={onToggle}>
      <div className="faq-item__head">
        <p className="faq-item__q">{item.q}</p>
        <span className="faq-item__icon">
          <Plus size={20} />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-item__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const { t } = useI18n();
  const f = t.faq;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <Reveal className="faq__head">
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <h3 className="section__title section__title--center">{f.title}</h3>
        </Reveal>

        <div className="faq__grid">
          <Reveal className="faq__aside">
            <span className="faq__aside-avatar">
              <img src="/assets/portfolio.jpg" alt="Salem" />
            </span>
            <h6 className="faq__aside-title">{f.asideTitle}</h6>
            <p className="faq__aside-text">{f.asideText}</p>
            <a className="faq__aside-cta" href={calLink()} target="_blank" rel="noreferrer">
              <span className="hero__cta-icon hero__cta-icon--sm">
                <Calendar size={26} />
              </span>
              <span className="hero__cta-text">
                <strong>{f.asideCta}</strong>
                <small>{t.hero.ctaSub}</small>
              </span>
            </a>
            <p className="faq__aside-mail">
              {f.mailLabel} <a href={`mailto:${ME.email}`}>{ME.email}</a>
            </p>
            <p className="faq__aside-mail">
              {f.phoneLabel}{" "}
              <a href={waLink()} target="_blank" rel="noreferrer">
                {ME.phone}
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.06} className="faq__list">
            {f.items.map((item, i) => (
              <Item
                key={item.q}
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
