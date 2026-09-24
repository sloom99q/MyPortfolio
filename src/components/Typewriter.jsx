import { useEffect, useRef, useState } from "react";

// Types out styled segments character-by-character when scrolled into view.
// Each segment is { t: text, c: className } or { br: true } for a line break.
// Preserves highlight colours while typing, with a blinking cursor at the tip.
export default function Typewriter({
  segments,
  speed = 16,
  step = 2,
  startDelay = 0,
  className,
  dir,
}) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const total = segments.reduce((n, s) => n + (s.br ? 1 : s.t.length), 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          if (reduce) {
            setCount(total);
            return;
          }
          const begin = () => {
            const id = setInterval(() => {
              setCount((c) => {
                if (c >= total) {
                  clearInterval(id);
                  return c;
                }
                return c + step;
              });
            }, speed);
          };
          const t = setTimeout(begin, startDelay);
          return () => clearTimeout(t);
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [total, speed, step, startDelay]);

  let remaining = count;
  const out = [];
  for (let i = 0; i < segments.length; i++) {
    const s = segments[i];
    if (remaining <= 0) break;
    if (s.br) {
      out.push(<br key={i} />);
      remaining -= 1;
      continue;
    }
    const show = Math.min(s.t.length, remaining);
    out.push(
      <span key={i} className={s.c}>
        {s.t.slice(0, show)}
      </span>
    );
    remaining -= show;
  }

  const typing = count < total;

  return (
    <p ref={ref} className={className} dir={dir}>
      {out}
      {typing && <span className="term-cursor term-cursor--inline" />}
    </p>
  );
}
