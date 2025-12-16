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
import Contact from './components/Contact'; // <--- NEW IMPORT

function App() {
  return (
    <div className="App">
      <div className="gradient-background" />
      <SocialButtons />
      <HamburgerMenu />

      <div className="main-content">
        
        <section id="home">
          <Intro />
        </section>

        <section id="about">
          <Title text="About Me" />
          <AboutMe />
        </section>

        <section id="experience">
          <Title text="Work Experience" />
          <WorkExperience />
        </section>

        <section id="education">
          <Title text="Education History" />
          <EducationHistory />
        </section>

        <section id="skills">
          <Title text="Skills" />
          <Skills />
        </section>

        <section id="achievements">
          <Title text="Achievements" />
          <Achievements />
        </section>

        {/* --- NEW CONTACT SECTION --- */}
        <section id="contact">
          <Title text="Get In Touch" />
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;