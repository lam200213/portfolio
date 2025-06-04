// About.jsx
// About Me section with a card-style item and download resume button.

import React from 'react';
import { aboutText } from '../../data';
import { linkData } from '../../data';
import styles from '../../styles/components/about.module.css';

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <h2 className={"section-title"}>About Me</h2>
          <div className={styles.aboutItem}>
            <p className={styles.aboutDescription}>{aboutText}</p>
            <div className={styles.aboutActions}>
              {/* Download resume button */}
              <a 
                href={linkData.link}
                className={styles.aboutBtn}
                download
                aria-label="Download Resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 