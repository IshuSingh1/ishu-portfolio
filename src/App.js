import React from 'react';
import ProfileImage from './components/ProfileImage';
import SocialButtons from './components/SocialButtons';
import './App.css'; // Make sure this file contains the gradient styles

function App() {
  return (
    <div className="App">
      {/* Fixed container for social buttons */}
      <div className="fixed-container">
        <SocialButtons />
      </div>

      {/* Scrollable content */}
      <div className="gradient-background scrollable-container">
        <header className="App-header">
          <ProfileImage />
          <h1 className="h1-animated-gradient">Hello, I'm Ishu Singh</h1>
          {/* ... other components that will be scrolled into view ... */}
        </header>
      </div>
    </div>
  );
}

export default App;
