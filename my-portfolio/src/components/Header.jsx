// import React from "react";
// import Navigation from "./Navigation";

// const Header = ({ setCurrentSection, currentSection }) => (
//   <header>
//     <h1>Ben Merchant</h1>
//     <img src="/assets/headshot.jpeg" alt="Ben Merchant's pic" />
//     <Navigation
//       setCurrentSection={setCurrentSection}
//       currentSection={currentSection}
//     />
//   </header>
// );

// export default Header;

import React from "react";
import Navigation from "./Navigation";
import "../App.css";

const Header = ({ setCurrentSection, currentSection }) => (
  <header className="header">
    <h1 className="me-2">Ben Merchant</h1>
    <img
      className="img-fluid"
      src="/assets/headshot.jpeg"
      alt="Ben Merchant's pic"
    />
    <Navigation
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
    />
  </header>
);

export default Header;
