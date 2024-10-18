import React from "react";
import "../App.css";

const projects = [
  {
    title: "Horiseon Homepage",
    imageUrl: "../assets/horiseon-homepage.png",
    deployedUrl: "https://jengelfling.github.io/accessibility-seo-cleanup/",
    githubUrl: "https://github.com/JenGelfling/accessibility-seo-cleanup",
    description:
      "In the Horiseon SEO and accessibility project we refactored the HTML and CSS to follow best practices around semantic elements and reducing redundancies.",
  },
  {
    title: "Employee Payroll Tracker",
    imageUrl: "../assets/employee-payroll-tracker-example.gif",
    deployedUrl: "https://jengelfling.github.io/employee-pay-tracker/",
    githubUrl: "https://github.com/JenGelfling/employee-pay-tracker",
    description:
      "For the employee pay tracker, I created the javascript to allow a user to enter first name, last name, and salaries of employees. After entering the employee information, the console shows the winner of a random drawing and the average salary of all employees entered.",
  },
  {
    title: "Moonshadow Bodywork",
    imageUrl: "../assets/moonshadow-bodywork.png",
    deployedUrl: "https://www.moonshadowbodywork.com/",
    description: "This is the homepage for my Massage Therapy business.",
  },
];

const Portfolio = () => (
  <div className="section">
    <h2>My Projects</h2>
    <div>
      {projects.map((project) => (
        <div key={project.title}>
          <a
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link space"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              width="400"
              height="250"
            />
          </a>
          <h3 className="portfolio-title">
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link view-code-link"
            >
              View Code
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
