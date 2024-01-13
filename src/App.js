import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Translation from "./utils/languages.json";
import Loading from "./components/Loading/Loading";
import { motion, useScroll, useSpring } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const WorkExperience = lazy(() =>
  import("./components/Work_Experience/WorkExperience")
);
const ContactMe = lazy(() => import("./components/ContactMe/ContactMe"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  /* Motion framer */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // Retrieve language from local storage or default to 'french'
  const storedLanguage = localStorage.getItem("language");
  const initialLanguage = storedLanguage || "french";
  /* Change language of the website */
  const [language, setLanguage] = useState(initialLanguage);
  const [content, setContent] = useState({});

  useEffect(() => {
    localStorage.setItem("language", language);
    if (language === "french") {
      setContent(Translation.french);
    } else if (language === "english") {
      setContent(Translation.english);
    }
  }, [language]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar
          setLanguage={setLanguage}
          content={content}
          language={language}
        />
        <div className="container">
          <Hero content={content} />
          <Skills content={content} />
          <WorkExperience content={content} />
          <ContactMe content={content} language={language} />
        </div>
        <ScrollToTop />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
