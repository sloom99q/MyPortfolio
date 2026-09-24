import { useEffect, useRef, useState } from "react";

// Count a number up from 0 → target once it scrolls into view.
export function useCountUp(target, { duration = 1400 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              // easeOutExpo
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              setValue(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, value];
}

// Type a string out character by character once in view.
export function useTypewriter(text, { speed = 45, startDelay = 300 } = {}) {
  const ref = useRef(null);
  const [out, setOut] = useState("");
  const [active, setActive] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            setActive(true);
            let i = 0;
            const begin = () => {
              const id = setInterval(() => {
                i += 1;
                setOut(text.slice(0, i));
                if (i >= text.length) clearInterval(id);
              }, speed);
            };
            const t = setTimeout(begin, startDelay);
            return () => clearTimeout(t);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, speed, startDelay]);

  return [ref, out, active];
}

// Track normalized scroll progress (0 → 1) of the whole document.
export function useScrollProgress() {
  const [p, setP] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setP(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
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
  return p;
}
