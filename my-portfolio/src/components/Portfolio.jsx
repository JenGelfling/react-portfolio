import React from "react";

const projects = [
  {
    title: "Horiseon Homepage",
    imageUrl: "../assets/horiseon-homepage.png",
    deployedUrl: "https://jengelfling.github.io/accessibility-seo-cleanup/",
    githubUrl: "github-url-1",
    description:
      "In the Horiseon SEO and accessibility project we refactored the HTML and CSS to follow best practices around semantic elements and reducing redundancies.",
  },
  {
    title: "Moonshadow Bodywork",
    imageUrl: "../assets/moonshadow-bodywork.png",
    deployedUrl: "https://www.moonshadowbodywork.com/",
    githubUrl: "github-url-2",
    description: "This is the homepage for my Massage Therapy business.",
  },
  // Add more projects as needed...
];

const Portfolio = () => (
  <section>
    <h2>My Projects</h2>
    <div>
      {projects.map((project) => (
        <div key={project.title}>
          <a
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="space"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              width="400"
              height="250"
            />
          </a>
          <h3>
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
