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
import Legal from "./components/Legal";
import { WhatsAppFab } from "./components/Controls";

// Tiny hash router: #/terms and #/privacy are real pages; everything else is home.
function getRoute() {
  const h = window.location.hash.replace(/^#/, "");
  if (h === "/terms") return "terms";
  if (h === "/privacy") return "privacy";
  return "home";
}

export default function App() {
  const [project, setProject] = useState(null);
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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

  if (route === "terms" || route === "privacy") {
    return <Legal doc={route} />;
  }

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
