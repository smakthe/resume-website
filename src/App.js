import React, { useState, Suspense, useEffect } from 'react';
import './App.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Profile = React.lazy(() => import('./components/Profile'));
const Certifications = React.lazy(() => import('./components/Certifications'));

const App = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.documentElement.style.setProperty('--bg-secondary', 'var(--column-background-dark)');
      document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
      document.documentElement.style.setProperty('--border-color', 'var(--border-color-dark)');
      document.documentElement.style.setProperty('--hover-color', 'var(--hover-color-dark)');
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.style.setProperty('--bg-secondary', 'var(--column-background-light)');
      document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
      document.documentElement.style.setProperty('--border-color', 'var(--border-color-light)');
      document.documentElement.style.setProperty('--hover-color', 'var(--hover-color-light)');
    }
  }, [theme]);

  return (
    <>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? "🌙" : "☀️" }
      </button>
      <div className="app-container">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="left-column">
            <Profile />
            <Contact />
            <Education />
            <Skills />
            <Certifications />
          </div>
          <div className="right-column">
            <Experience />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default App;
