import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Eyebrow } from "./ui";
import { useTypewriter } from "../hooks";
import Typewriter from "./Typewriter";
import { ME, waLink } from "../data";
import { useI18n } from "../i18n";

const line = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function About() {
  const { t, dir } = useI18n();
  const a = t.about;
  const [composing, setComposing] = useState(false);
  const [cmdRef, cmd] = useTypewriter(a.cmd, { speed: 55 });

  // Styled bio segments — typed out on scroll while keeping highlight colours.
  const bio = [
    { t: "✳ ", c: "amber" },
    { t: a.bio1a, c: "dim" },
    { t: a.bioName, c: "wht" },
    { t: a.bio1b, c: "dim" },
    { t: a.bioLoc, c: "wht" },
    { t: a.bio1c, c: "dim" },
    { t: a.made, c: "amber" },
    { t: a.bio1d, c: "dim" },
    { t: a.assembled, c: "amber" },
    { t: a.bio1e, c: "dim" },
    { br: true },
    { br: true },
    { t: a.bio2a, c: "dim" },
    { t: a.talk, c: "wht" },
    { t: a.bio2b, c: "dim" },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="about__head">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h3 className="section__title section__title--center">{a.title}</h3>
        </Reveal>

        <motion.div
          className="terminal"
          dir={dir}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="terminal__bar" dir="ltr">
            <span className="terminal__lights">
              <i className="tl tl--r" />
              <i className="tl tl--y" />
              <i className="tl tl--g" />
            </span>
            <span className="terminal__titlebar">{ME.handle} — zsh — 120x30</span>
            <span className="terminal__ver">v1.0</span>
          </div>

          <motion.div
            className="terminal__body"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div className="terminal__topline" variants={line} dir="ltr">
              <span className="terminal__mugshot">
                <img src="/assets/glitched.jpg" alt="Salem" />
              </span>
              <div className="terminal__topcontent">
                <p className="term-line" dir="ltr" ref={cmdRef}>
                  <span className="tok tok--green">{ME.handle}</span>
                  <span className="tok tok--dim"> :~ % </span>
                  <span className="tok tok--white">{cmd}</span>
                  <span className="term-cursor term-cursor--inline" />
                </p>
                <p className="term-line term-line--label" dir={dir}>{a.stack}</p>
                <div className="term-stack" dir={dir}>
                  {a.skills.map((s) => (
                    <span key={s.label} className="term-stack__chip">
                      <i style={{ background: s.color }} />
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <Typewriter
              className="term-bio"
              segments={bio}
              dir={dir}
              speed={16}
              step={2}
              startDelay={1200}
            />

            <motion.div className="term-badges" variants={line}>
              {a.badges.map((b) => (
                <span key={b} className="term-badge">
                  {b}
                </span>
              ))}
            </motion.div>

            {!composing ? (
              <motion.div className="term-compose-prompt" variants={line}>
                <span className="dim">{a.promptA}</span>
                <kbd>C</kbd>
                <span className="dim">{a.promptB}</span>
                <span className="green-link" onClick={() => setComposing(true)}>
                  {a.clickHere}
                </span>
                <span className="dim">{a.promptC}</span>
                <span className="term-cursor" />
              </motion.div>
            ) : (
              <div className="term-composer">
                <p className="term-line" dir="ltr">
                  <span className="tok tok--green">{ME.handle}</span>
                  <span className="tok tok--dim"> :~ % </span>
                  <span className="tok tok--white">./compose.sh</span>
                </p>
                <div className="composer-field">
                  <span className="green">{a.to}</span> <span className="dim">{ME.email}</span>
                </div>
                <div className="composer-field">
                  <span className="green">{a.from}</span> <input placeholder={a.fromPh} />
                </div>
                <div className="composer-field">
                  <span className="green">{a.subject}</span> <input placeholder={a.subjectPh} />
                </div>
                <div className="composer-field composer-field--msg">
                  <span className="green">{a.message}</span>
                  <textarea placeholder={a.messagePh} rows={2} />
                </div>
                <a className="composer-send" href={waLink()} target="_blank" rel="noreferrer">
                  {a.send}
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
