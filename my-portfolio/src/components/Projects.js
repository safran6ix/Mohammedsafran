import React from "react";

const projects = [
    {
        id: 1,
        title: 'E-commerce App',
        description: 'React shopping cart with Redux',
        tech: 'React, Redux, CSS',
        link: '#'
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'Real-time weather data',
        tech: 'React, API, Axios',
        link: '#'
    },
    {
        id: 3,
        title: 'Task Manager',
        description: 'Todo list with local storage',
        tech: 'React, Hooks, LocalStorage',
        link: '#'
    }
];

function Projects() {
    return (
        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
             {projects.map(project => (
                <div key={project.id} className="project-card">
                   <h3>{project.title}</h3>
                   <p>{project.description}</p>
                   <p><strong>Tech:</strong>{project.tech}</p>
                     <a href={project.link}>View Project →</a>
                </div>
             ))}
          </div>
        </section>
    );
}

export default Projects;