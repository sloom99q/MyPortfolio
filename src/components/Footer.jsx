import { ME, waLink, calLink } from "../data";
import { useI18n } from "../i18n";
import { Reveal, Avatar } from "./ui";
import { Calendar } from "./icons";

export default function Footer() {
  const { t, lang } = useI18n();
  const f = t.footer;
  return (
    <section id="contact" className="section footer">
      <div className="container footer__inner">
        <Reveal>
          <Avatar size={92} />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="eyebrow">{f.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="footer__title">
            {f.title1}
            <br />
            {f.title2Pre}
            <span className="accent">{f.title2Accent}</span>
          </h3>
        </Reveal>

        <Reveal delay={0.14}>
          <a className="hero__cta footer__cta" href={calLink()} target="_blank" rel="noreferrer">
            <span className="hero__cta-icon">
              <Calendar size={30} />
            </span>
            <span className="hero__cta-text">
              <strong>{f.cta}</strong>
              <small>{t.hero.ctaSub}</small>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="footer__contact">
            <a href={waLink()} target="_blank" rel="noreferrer">
              {ME.phone}
            </a>
            <span className="footer__contact-sep">·</span>
            <a href={`mailto:${ME.email}`}>{ME.email}</a>
          </p>
        </Reveal>
      </div>

      <div className="container footer__bar">
        <div className="footer__links">
          <a href="#" onClick={(e) => e.preventDefault()}>
            {f.terms}
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            {f.privacy}
          </a>
        </div>
        <p className="footer__credit">
          © 2026 · {f.credit} <strong>{lang === "ar" ? "سالم العزاوي" : "Salem Alazzawi"}</strong>
        </p>
      </div>
    </section>
  );
}
