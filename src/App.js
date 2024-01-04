// App.js
import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import SocialButtons from './components/SocialButtons';
import WorkExperience from './components/WorkExperience';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="fixed-container">
        <SocialButtons />
      </div>
      <div className="gradient-background" />
      <div className={isScrolled ? 'intro-container hidden' : 'intro-container'}>
        <Intro />
      </div>
      <div className={isScrolled ? 'work-experience-container visible' : 'work-experience-container hidden'}>
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
