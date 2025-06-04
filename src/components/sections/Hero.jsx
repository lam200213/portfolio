// Hero.jsx
// Full viewport hero section with headline, tagline, and two CTA buttons.

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../../styles/components/hero.module.css';
import { heroData } from '../../data';
import { linkData } from '../../data';

function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        {/* Main headline and role */}
        <h1 className={styles.heroHeadline}>
          <span className={styles.heroRole}>{heroData.role}</span>
        </h1>
        <h1 className={styles.heroHeadline}>
          <span className={styles.heroName}>{heroData.name}</span>
        </h1>
        <p className={styles.heroTagline}>{heroData.tagline}</p>
        <div className={styles.heroCtaGroup}>
          {/* Scrolls to About section */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}
            tabIndex={0}
            offset={-68}
          >
            Know more
          </ScrollLink>
          {/* Download resume button */}
          <a
            href={linkData.link}
            className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}
            download
            tabIndex={0}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero; 