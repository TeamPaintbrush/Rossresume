import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './animations.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTransition from './components/PageTransition/PageTransition';

// Pages
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';
import Contact from './pages/Contact/Contact';
import Jobs from './pages/Jobs/Jobs';

// Styles
import './App.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(
    () => {
      try {
        return localStorage.getItem('theme') === 'dark';
      } catch {
        return false;
      }
    },
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        /* storage unavailable — fine */
      }
      return next;
    });
  };

  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <ScrollToTop />
      <div className="app">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              {/* Private local tool — not linked from the header nav; only works against the dev API */}
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:company/:role" element={<Jobs />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
