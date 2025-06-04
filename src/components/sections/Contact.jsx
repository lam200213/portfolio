// Contact.jsx
// Contact section with a form that sends messages using EmailJS. Includes loading, success, and error states.

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/components/contact.module.css';

const SERVICE_ID = 'service_xxxxxx'; // EmailJS service ID
const TEMPLATE_ID = 'template_xxxxxx'; // EmailJS template ID
const PUBLIC_KEY = 'xxx'; // EmailJS public key

function Contact() {
  const form = useRef(); // Ref for the form element
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [success, setSuccess] = useState(false); // Success state for form submission
  const [error, setError] = useState(''); // Error state for form submission

  // Handles form submission and sends email using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setError('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        {/* Contact form for user messages */}
        <form ref={form} className={styles.contactForm} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formGroupLabel}>Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" className={styles.formGroupInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formGroupLabel}>Email</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com" className={styles.formGroupInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.formGroupLabel}>Title</label>
            <input type="text" id="title" name="title" required placeholder="Title" className={styles.formGroupInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formGroupLabel}>Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Type your message..." className={styles.formGroupTextarea} />
          </div>
          <button type="submit" className={styles.contactBtn} disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {/* Success and error messages */}
          {success && <div className={styles.formSuccess}>Thank you! Your message has been sent.</div>}
          {error && <div className={styles.formError}>{error}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;