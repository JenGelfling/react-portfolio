import React from "react";

const projects = [
  {
    title: "Project 1",
    imageUrl: "project1-image-url",
    deployedUrl: "deployed-url-1",
    githubUrl: "github-url-1",
  },
  // Add more projects...
];

const Portfolio = () => (
  <section>
    <h2>My Projects</h2>
    <div>
      {projects.map((project) => (
        <div key={project.title}>
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.deployedUrl}>View Live</a>
          <a href={project.githubUrl}>View Code</a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
