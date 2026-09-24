import { motion } from "framer-motion";
import { PROJECT_VISUALS, PROJECT_ORDER } from "../data";
import { useI18n } from "../i18n";
import { Reveal, Eyebrow } from "./ui";
import { Chevron, Star } from "./icons";
import Mockup from "./Mockups";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectCard({ p, v, i, viewLabel, dir }) {
  return (
    <motion.button
      type="button"
      className="proj__card"
      onClick={() => v.onOpen(i)}
      aria-label={p.name}
      variants={card}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <div className="proj__stage">
        <div className="proj__tags">
          {p.tags.map((label, ti) => (
            <span
              key={label}
              className="proj__tag"
              style={{
                color: v.tagColors[ti],
                background: `${v.tagColors[ti]}1f`,
                borderColor: v.tagColors[ti],
              }}
            >
              <Star size={12} />
              {label}
            </span>
          ))}
        </div>
        <motion.div
          className="proj__mock"
          variants={{ rest: { y: 0, scale: 1 }, hover: { y: -14, scale: 1.04 } }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
        >
          <Mockup index={i} accent={v.accent} shot={v.shot} />
        </motion.div>
      </div>

      <div className="proj__body">
        <div className="proj__body-top">
          <h5 className="proj__name">{p.name}</h5>
          <span className="proj__view">
            {viewLabel}
            <Chevron size={14} style={{ transform: `rotate(${dir === "rtl" ? 90 : -90}deg)` }} />
          </span>
        </div>
        <p className="proj__blurb">{p.blurb}</p>
        <p className="proj__meta">{p.meta}</p>
      </div>
    </motion.button>
  );
}

export default function Work({ onOpen }) {
  const { t, dir } = useI18n();
  return (
    <section id="work" className="section work">
      <div className="container">
        <Reveal className="work__head">
          <Eyebrow>{t.work.eyebrow}</Eyebrow>
          <h2 className="section__title work__title">
            {t.work.title1}{" "}
            <span className="work__title-icon" aria-hidden>
              📁
            </span>{" "}
            {t.work.afterIcon}
            <br />
            {t.work.title2}
          </h2>
        </Reveal>

        <motion.div
          className="work__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {PROJECT_ORDER.map((idx) => (
            <ProjectCard
              key={t.work.projects[idx].name}
              p={t.work.projects[idx]}
              v={{ ...PROJECT_VISUALS[idx], onOpen }}
              i={idx}
              viewLabel={t.work.view}
              dir={dir}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
