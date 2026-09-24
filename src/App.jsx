import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import WhyMe from "./components/WhyMe";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { WhatsAppFab } from "./components/Controls";

export default function App() {
  const [project, setProject] = useState(null);

  const open = (i) => {
    setProject(i);
    window.history.pushState({ project: i }, "");
  };
  const close = () => {
    if (window.history.state && window.history.state.project != null) {
      window.history.back();
    } else {
      setProject(null);
    }
  };

  // Browser back button closes the showcase.
  useEffect(() => {
    const onPop = () => setProject(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Work onOpen={open} />
        <WhyMe />
        <About />
        <Pricing />
        <Faq />
        <Footer />
      </main>
      <WhatsAppFab />

      <AnimatePresence>
        {project !== null && <ProjectDetail key={project} index={project} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
