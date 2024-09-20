import React from "react";
import Navigation from "./Navigation";

const Header = ({ setCurrentSection, currentSection }) => (
  <header>
    <h1>Ben Merchant</h1>
    <Navigation
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
    />
  </header>
);

export default Header;
