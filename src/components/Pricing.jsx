import { useI18n } from "../i18n";
import { calLink } from "../data";
import { Reveal, Eyebrow, AvatarStack } from "./ui";
import { Check, Star } from "./icons";

export default function Pricing() {
  const { t } = useI18n();
  const p = t.pricing;
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <Reveal className="pricing__head">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h3 className="section__title section__title--center">{p.title}</h3>
        </Reveal>

        <div className="pricing__grid">
          <Reveal className="pricecard pricecard--light">
            <h4 className="pricecard__lede">
              {p.lede1}
              <br />
              {p.lede2}
            </h4>
            <p className="pricecard__desc">{p.desc}</p>
            <div className="pricecard__proof">
              <AvatarStack />
              <div className="pricecard__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
                <span>{p.satisfied}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="pricecard pricecard--dark">
            <div className="pricecard__top">
              <span className="pricecard__logo">S</span>
              <div>
                <h6 className="pricecard__plan">{p.planName}</h6>
                <p className="pricecard__plandesc">{p.planDesc}</p>
              </div>
            </div>

            <div className="pricecard__price">
              <span className="pricecard__from">{p.from}</span>
              <span className="pricecard__amount">{p.amount}</span>
              <span className="pricecard__per">
                {p.currency} / {p.per}
              </span>
            </div>

            <ul className="pricecard__features">
              {p.features.map((f) => (
                <li key={f}>
                  <span className="feat-check">
                    <Check size={13} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="pricecard__addons">
              <span className="pricecard__addons-title">{p.addonsTitle}</span>
              {p.addons.map((a) => (
                <div key={a.label} className="pricecard__addon">
                  <span>{a.label}</span>
                  <span className="pricecard__addon-price">{a.price}</span>
                </div>
              ))}
            </div>

            <a className="btn btn--white btn--block" href={calLink()} target="_blank" rel="noreferrer">
              {p.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
