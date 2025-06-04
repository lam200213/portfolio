// Experience.jsx
// Experience section displaying a timeline of work experiences with roles, companies, dates, and skills.

import React from 'react';
import { experienceData } from '../../data';
import styles from '../../styles/components/experience.module.css';

function Experience() {
  // Renders the experience section with a timeline of experience items
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className={styles.experienceTimeline}>
          {/* Map through experienceData to display each experience item */}
          {experienceData.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <span className={styles.experienceDate}>{exp.date}</span>
              </div>
              <h4 className={styles.experienceCompany}>{exp.company}</h4>
              <p className={styles.experienceDescription}>{exp.description}</p>
              {/* Display skills for each experience, if available */}
              {exp.skills && (
                <div className={styles.experienceSkills}>
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 