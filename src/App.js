import { useEffect, useState } from "react";
import "./App.css";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/Work_Experience/WorkExperience";
import Translation from "./utils/languages.json";

function App() {
  /* Change language of the website */
  const [language, setLanguage] = useState("french");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === "french") {
      setContent(Translation.french);
    } else if (language === "english") {
      setContent(Translation.english);
    }
  }, [language, Translation]);

  return (
    <>
      <Navbar setLanguage={setLanguage} content={content} language={language} />
      <div className="container">
        <Hero content={content} />
        <Skills content={content} />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
