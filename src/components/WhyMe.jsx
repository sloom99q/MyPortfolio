import { FILE_VERSIONS, ME } from "../data";
import { useI18n } from "../i18n";
import { Reveal, Eyebrow, AvatarStack } from "./ui";
import { Star } from "./icons";
import { useCountUp } from "../hooks";

function FileBrowser({ filesLabel, assetsLabel }) {
  return (
    <div className="filebrowser" dir="ltr">
      <div className="filebrowser__head">
        <span className="filebrowser__logo">A</span>
        <span className="filebrowser__title">aura-interiors</span>
        <span className="filebrowser__grip" />
      </div>
      <div className="filebrowser__tabs">
        <span className="is-active">{filesLabel}</span>
        <span>{assetsLabel}</span>
      </div>
      <ul className="filebrowser__list">
        {FILE_VERSIONS.map((v, i) => (
          <li key={v} data-last={i === FILE_VERSIONS.length - 1}>
            <span className="filebrowser__file-icon" />
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Collage({ label }) {
  return (
    <div className="collage">
      <img className="collage__shot collage__shot--back" src="/assets/amolfi.jpg" alt="" loading="lazy" />
      <img className="collage__shot collage__shot--mid" src="/assets/velum.jpg" alt="" loading="lazy" />
      <div className="collage__front">
        <img src="/assets/zan-hero.jpg" alt="" loading="lazy" />
        <span className="collage__pill">
          <Star size={11} />
          {label}
        </span>
      </div>
    </div>
  );
}

function Stat({ target, label }) {
  const [ref, value] = useCountUp(target);
  return (
    <div className="stat" ref={ref}>
      <span className="stat__num">{value}+</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function WhyMe() {
  const { t } = useI18n();
  const w = t.why;
  return (
    <section id="why" className="section why">
      <div className="container">
        <Reveal className="why__head">
          <Eyebrow>{w.eyebrow}</Eyebrow>
          <h2 className="section__title section__title--center">
            {w.title1}
            <br />
            {w.title2}
          </h2>
        </Reveal>

        <div className="why__bento">
          <Reveal className="bento bento--a">
            <div className="bento__visual">
              <Collage label={w.aTitle} />
            </div>
            <h5 className="bento__title">{w.aTitle}</h5>
            <p className="bento__text">{w.aText}</p>
          </Reveal>

          <Reveal delay={0.06} className="bento bento--b">
            <div className="bento__head-row">
              <div>
                <h5 className="bento__title">{w.bTitle}</h5>
                <p className="bento__text">{w.bText}</p>
              </div>
            </div>
            <div className="bento__visual bento__visual--browser">
              <FileBrowser filesLabel="Files" assetsLabel="Assets" />
            </div>
          </Reveal>

          <Reveal className="bento bento--c bento--dark">
            <div>
              <h5 className="bento__title bento__title--light">{w.planTitle}</h5>
              <p className="bento__text bento__text--light">{w.planText}</p>
            </div>
            <div className="mini-plan">
              <div className="mini-plan__row">
                <span className="mini-plan__logo">S</span>
                <div>
                  <p className="mini-plan__name">{w.planName}</p>
                  <p className="mini-plan__desc">{w.planDesc}</p>
                </div>
              </div>
              <div className="mini-plan__foot">
                <button className="btn btn--rose">{w.join}</button>
                <span className="mini-plan__proof">
                  <AvatarStack colors={["#f43f5e", "#a855f7", "#3b82f6"]} />
                  {w.proof}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="bento bento--d">
            <Stat target={ME.years} label={w.years} />
            <Stat target={ME.websites} label={w.websites} />
          </Reveal>

          <Reveal delay={0.12} className="bento bento--e bento--dark">
            <h5 className="bento__title bento__title--light">{w.happyTitle}</h5>
            <p className="bento__text bento__text--light">{w.happyText}</p>
            <div className="quote">
              <div className="quote__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="quote__body">{w.quote}</p>
              <div className="quote__author">
                <span className="quote__avatar" style={{ background: "#f43f5e" }} />
                <div>
                  <p className="quote__name">{w.quoteName}</p>
                  <p className="quote__role">{w.quoteRole}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
