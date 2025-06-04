// Footer.jsx
// Footer component with social links and copyright.

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { footerData } from '../../data';
import styles from '../../styles/components/footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Renders the footer with social media links and copyright
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            {footerData.socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.name}
                className={styles.socialLinksA}
              >
                {link.icon === 'FaGithub' && <FaGithub />}
                {link.icon === 'FaLinkedin' && <FaLinkedin />}
                {link.icon === 'FaTwitter' && <FaTwitter />}
              </a>
            ))}
          </div>
          <p className={styles.copyright}>
            &copy; {currentYear} {footerData.copyright.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 