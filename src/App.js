import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

const App = () => (
    <>
      <GlobalStyles />
        <div className="App">
          <div className="left-column">
            <Profile />
            <Contact />
            <Skills />
            <Education />
          </div>
          <div className="right-column">
            <Experience />
          </div>
        </div>
    </>
);

export default App;
