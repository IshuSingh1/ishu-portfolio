import React from 'react';
import ProfileImage from './components/ProfileImage';
import './App.css'; // Make sure this file contains the gradient styles

function App() {
  return (
    <div className="gradient-background">
      <header className="App-header">
        <ProfileImage />
        <h1 className="h1-animated-gradient">Hello, I'm Ishu Singh</h1>
        {/* ... the rest of your content ... */}
      </header>
    </div>
  );
}

export default App;
