// Skills.jsx
// Skills section displaying a grid of skills with progress bars and levels.

import React from 'react';
import { skillsData } from '../../data';
import styles from '../../styles/components/skills.module.css';

function Skills() {
  // Renders the skills section with a grid of skill items
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className={styles.skillsGrid}>
          {/* Map through skillsData to display each skill and its progress */}
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.skillProgress}>
                {/* Progress bar for skill level */}
                <div 
                  className={styles.skillProgressBar} 
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
      ))}
    </div>
      </div>
    </section>
  );
}

export default Skills;