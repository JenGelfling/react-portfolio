import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [currentSection, setCurrentSection] = useState("AboutMe");

  const renderSection = () => {
    switch (currentSection) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <main className="section">{renderSection()}</main>
      <Footer />
    </>
  );
};

export default App;
