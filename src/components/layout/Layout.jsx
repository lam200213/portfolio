// Layout.jsx
// Main layout wrapper that includes navigation, main content, and footer.

import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
  // Renders the layout with navigation at the top, main content, and footer at the bottom
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 