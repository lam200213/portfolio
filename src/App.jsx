// App.jsx
// Main entry point for the React application. Sets up theme, routing, and layout.

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Provides dark/light theme context
import Layout from './components/layout/Layout'; // Main layout wrapper (nav, footer)
import Hero from './components/sections/Hero'; // Hero/landing section
import About from './components/sections/About'; // About Me section
import Experience from './components/sections/Experience'; // Experience timeline
import Education from './components/sections/Education'; // Education timeline
import Projects from './components/sections/Projects'; // Projects showcase
import Skills from './components/sections/Skills'; // Skills/progress bars
import Contact from './components/sections/Contact'; // Contact form

// Import global style
import './styles/global.css';

function App() {
  // Wraps the app in ThemeProvider (for dark/light mode) and Router (for navigation)
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          {/* Main sections of the portfolio */}
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
