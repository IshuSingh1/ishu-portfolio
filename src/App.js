import React from 'react';
import './App.css';

// Components
import Intro from './components/Intro';
import SocialButtons from './components/SocialButtons';
import WorkExperience from './components/WorkExperience';
import EducationHistory from './components/EducationHistory';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div className="App">
      {/* 1. Background & Nav Elements */}
      <div className="gradient-background" />
      <SocialButtons />
      <HamburgerMenu />

      {/* 2. Main Wrapper - Centers content & adds spacing */}
      <div className="main-content">
        
        {/* Intro / Home Section */}
        <section id="home">
          <Intro />
        </section>

        {/* About Me Section - Added ID for scrolling */}
        <section id="about">
          <Title text="About Me" />
          <AboutMe />
        </section>

        {/* Work Experience Section - Added ID for scrolling */}
        <section id="experience">
          <Title text="Work Experience" />
          <WorkExperience />
        </section>

        {/* Education Section - Added ID for scrolling */}
        <section id="education">
          <Title text="Education History" />
          <EducationHistory />
        </section>

        {/* Skills Section - Added ID for scrolling */}
        <section id="skills">
          <Title text="Skills" />
          <Skills />
        </section>

        {/* Achievements Section - Added ID for scrolling */}
        <section id="achievements">
          <Title text="Achievements" />
          <Achievements />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;