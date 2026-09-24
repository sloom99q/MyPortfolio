import { motion } from "framer-motion";
import { useI18n } from "../i18n";
import { waLink } from "../data";
import { WhatsApp } from "./icons";

// Floating WhatsApp button, bottom corner.
export function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <motion.a
      className="wa-fab"
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={t.wa.aria}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsApp size={30} />
      <span className="wa-fab__pulse" />
    </motion.a>
  );
}
