import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "../i18n";
import { Chevron } from "./icons";

const IDS = ["top", "work", "why", "about", "pricing", "faq", "contact"];

export default function Nav() {
  const { t, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
        const mid = window.scrollY + window.innerHeight * 0.35;
        let current = 0;
        IDS.forEach((id, i) => {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= mid) current = i;
        });
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const label = t.nav.chapters[active];
  const atTop = active === 0;

  return (
    <header
      className={`nav ${open ? "nav--open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.div
        className="nav__pill"
        onClick={() => setOpen((v) => !v)}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="nav__avatar">
          <img src="/assets/portfolio.jpg" alt="Salem" />
          {atTop && <span className="nav__dot" />}
        </span>

        <span className="nav__roller">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={active}
              className="nav__label"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </span>

        <span className="nav__count">
          <span
            className="nav__count-fill"
            style={{ transform: `scaleX(${progress})` }}
          />
          <span className="nav__count-num">{Math.round(progress * 100)}</span>
        </span>
      </motion.div>

      <nav className="nav__links">
        {t.nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={go(l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav__cta" onClick={go("#contact")}>
          {t.nav.cta}
          <Chevron size={13} style={{ transform: `rotate(${dir === "rtl" ? 90 : -90}deg)` }} />
        </a>
      </nav>
    </header>
  );
}
