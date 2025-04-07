import React, { useState, Suspense } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import './App.css';

const Experience = React.lazy(() => import('./components/Experience'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Profile = React.lazy(() => import('./components/Profile'));
const Certifications = React.lazy(() => import('./components/Certifications'));

const lightTheme = {
  background: '#fff',
  textColor: '#000',
};

const darkTheme = {
  background: '#000',
  textColor: '#808080',
};

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px',
          margin: '10px',
          backgroundColor: theme === 'light' ? '#000' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {theme === 'light' ? "🌙" : "☀️" }
      </button>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <aside className="left-column">
            <Profile />
            <Contact />
            <Education />
            <Skills />
            <Certifications />
          </aside>
          <main className="right-column">
            <Experience />
          </main>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;