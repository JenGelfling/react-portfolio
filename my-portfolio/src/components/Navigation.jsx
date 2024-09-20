import React from "react";

const Navigation = ({ setCurrentSection, currentSection }) => {
  const sections = ["AboutMe", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setCurrentSection(section)}
          style={{ fontWeight: currentSection === section ? "bold" : "normal" }}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
