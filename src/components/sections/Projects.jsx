// Projects.jsx
// Projects section displaying a grid of project cards with images, descriptions, skills, and links.

import React from 'react';
import { projectsData } from '../../data';
import styles from '../../styles/components/projects.module.css';

function Projects() {
  // Renders the projects section with a grid of project cards
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className={styles.projectsGrid}>
          {/* Map through projectsData to display each project card */}
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectSkills}>
                  {/* Display technologies used in the project */}
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {/* Show GitHub and Live Demo links if available */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`View ${project.title} demo`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 