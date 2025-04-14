import React, { useState, Suspense } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AppContainer, LeftColumn, RightColumn, ThemeToggleButton } from './styles/components/LayoutStyles';
import { lightTheme, darkTheme } from './styles/theme';

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

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeToggleButton onClick={toggleTheme} $isLight={theme === 'light'}>
        {theme === 'light' ? "🌙" : "☀️" }
      </ThemeToggleButton>
      <AppContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <LeftColumn>
            <Profile />
            <Contact />
            <Education />
            <Skills />
            <Certifications />
          </LeftColumn>
          <RightColumn>
            <Experience />
          </RightColumn>
        </Suspense>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
