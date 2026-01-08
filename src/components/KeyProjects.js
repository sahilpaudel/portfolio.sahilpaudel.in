import React from 'react';
import { projects } from '../utility/projectData';
import './KeyProjects.css';

const KeyProjects = () => {
  return (
    <section className="key-projects-section" id="projects">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-small-card" key={index}>
            
            <div className="card-header-row">
              <div className="project-logo-box">
                {project.logo ? (
                  <img src={project.logo} alt={project.name} />
                ) : (
                  <span>🚀</span>
                )}
              </div>
              <span className="project-year-tag">{project.year}</span>
            </div>

            <div className="card-content-area">
              <h3 className="project-name-small">{project.name}</h3>
              
              <p className="project-contribution-subtitle">
                {project.contribution}
              </p>

              <p className="project-description-clipped">
                {project.description}
              </p>
            </div>

            <div className="card-footer-stack">
              {project.stack.slice(0, 3).map((tech, i) => (
                <span className="tiny-pill" key={i}>{tech}</span>
              ))}
              {project.stack.length > 3 && (
                 <span className="more-count">+{project.stack.length - 3}</span>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyProjects;