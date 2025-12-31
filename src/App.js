import React from 'react';
import './App.css';
import SurpriseNote from './components/SurpriseNote';
import TimerNote from './components/TimerNote';
import Diary from './components/Diary';

function App() {
  return (
    <div className="App">
      <h1 className="title">Happy New Year, Sanjana! 🎄✨</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>A special surprise just for you, the persone who taught me patience and love —explore, play, and dream with me.</p>
      <p>With Love , From your Tousif</p>
      
      <SurpriseNote />
      <TimerNote />
      <Diary />
    </div>
  );
}

export default App;