import React from "react";
import "../App.css";

const Resume = () => (
  <div className="section">
    <h2>Resume</h2>
    <a href="link-to-your-resume.pdf" download>
      Download Resume
    </a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>CSS</li>
      {/* Add more proficiencies... */}
    </ul>
  </div>
);

export default Resume;
