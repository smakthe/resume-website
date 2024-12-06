import React, { useState, Suspense } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { ThemeProvider } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const Profile = React.lazy(() => import('./components/Profile'));
const Certifications = React.lazy(() => import('./components/Certifications'));

const lightTheme = {
  background: '#fff',
  textColor: '#333',
};

const darkTheme = {
  background: '#121212',
  textColor: '#fff',
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
        <i className={`fa ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`} />
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