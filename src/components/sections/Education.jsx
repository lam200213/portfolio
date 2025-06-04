// Education.jsx
// Education section displaying academic background in a timeline format.

import React from 'react';
import styles from '../../styles/components/education.module.css';
import { educationData } from '../../data';

function Education() {
  // Renders the education section with a timeline of education items
  return (
    <section id="education" className={styles.educationSection}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className={styles.educationTimeline}>
          {educationData.map((education, index) => (
            <div key={index} className={styles.educationItem}>
              <h3 className={styles.educationDegree}>{education.degree}</h3>
              <h4 className={styles.educationInstitution}>{education.uni}</h4>
              <span className={styles.educationDate}>{education.date}</span>
              <p className={styles.educationDescription}>
                {education.description}
              </p>
          </div>
          ))}
        </div>
    </div>
    </section>
  );
}

export default Education;