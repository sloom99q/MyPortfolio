import { useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";
import { LEGAL } from "../legal";
import { ArrowLeft } from "./icons";
import Footer from "./Footer";

// Inline **bold** → <strong>. Everything else stays plain text.
function inline(text) {
  return text.split("**").map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

// Minimal Markdown renderer for the legal docs: # / ## / ### headings,
// `* ` bullet lists, blank-line-separated paragraphs, inline **bold**.
function Markdown({ source }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let list = null;
  const flush = () => {
    if (list) {
      blocks.push({ type: "ul", items: list });
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
    } else if (line.startsWith("### ")) {
      flush();
      blocks.push({ type: "h3", text: line.slice(4) });
    } else if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (line.startsWith("# ")) {
      flush();
      blocks.push({ type: "h1", text: line.slice(2) });
    } else if (line.startsWith("* ")) {
      (list ||= []).push(line.slice(2));
    } else {
      flush();
      blocks.push({ type: "p", text: line });
    }
  }
  flush();

  return blocks.map((b, i) => {
    if (b.type === "h1") return <h1 key={i} className="legal__title">{inline(b.text)}</h1>;
    if (b.type === "h2") return <h2 key={i} className="legal__h2">{inline(b.text)}</h2>;
    if (b.type === "h3") return <h3 key={i} className="legal__h3">{inline(b.text)}</h3>;
    if (b.type === "ul")
      return (
        <ul key={i} className="legal__list">
          {b.items.map((it, j) => (
            <li key={j}>{inline(it)}</li>
          ))}
        </ul>
      );
    return <p key={i} className="legal__p">{inline(b.text)}</p>;
  });
}

export default function Legal({ doc }) {
  const { t, dir } = useI18n();
  const source = LEGAL[doc];

  // Jump to the top whenever the document changes (e.g. Terms → Privacy).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc]);

  return (
    <div className="legal" dir={dir}>
      <header className="legal__bar">
        <a className="legal__back" href="#/">
          <ArrowLeft size={18} style={{ transform: dir === "rtl" ? "scaleX(-1)" : "none" }} />
          {t.footer.back}
        </a>
        <a className="legal__brand" href="#/">
          Salem Alazzawi
        </a>
      </header>

      {/* Legal text is English-only; force LTR so it reads correctly in Arabic mode. */}
      <motion.main
        className="legal__body"
        dir="ltr"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Markdown source={source} />
      </motion.main>

      <Footer />
    </div>
  );
}
