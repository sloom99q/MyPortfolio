import { motion } from "framer-motion";

// Scroll-reveal wrapper: fade + rise as the element enters the viewport.
export function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

// Small eyebrow label used above every section heading.
export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

// Photo avatar (Salem). Round, framed, face-aligned.
export function Avatar({ size = 132, ring = true, src = "/assets/portfolio.jpg", pos = "center 22%" }) {
  return (
    <div className={`avatar ${ring ? "avatar--ring" : ""}`} style={{ width: size, height: size }}>
      <img src={src} alt="Salem Alazzawi" draggable="false" style={{ objectPosition: pos }} />
    </div>
  );
}

// Tiny circular stacked avatars used in social-proof rows.
export function AvatarStack({ colors = ["#f43f5e", "#a855f7", "#3b82f6", "#10b981"] }) {
  return (
    <div className="avatar-stack">
      {colors.map((c, i) => (
        <span key={i} className="avatar-stack__dot" style={{ background: c, zIndex: colors.length - i }} />
      ))}
    </div>
  );
}
