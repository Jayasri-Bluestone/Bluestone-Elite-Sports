import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import SportPage from './SportPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import Gallery from './Gallery';
import StudentPortal from './Portal';
import Blog from './Blogs';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// We can simplify this by combining AppContent into the main App component
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="portal" element={<StudentPortal/>} />
          {/* <Route path="blogs" element={<Blog/>} /> */}
          <Route path="sports/:sportId" element={<SportPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}