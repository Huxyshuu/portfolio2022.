import './App.css';
import LandingPage from './Components/LandingPage';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import MiniSettings from './Components/MiniSettings';
import React, { useState } from 'react'

function App() {

  const [language, setLanguage] = useState('EN');

  return (
    <div className="App">
      <Menu setLanguage={setLanguage}/>
      <MiniSettings setLanguage={setLanguage}/>

      <LandingPage language={language}/>
      <Work language={language}/>
      <About language={language}/>
      <Contact language={language}/>
    </div>
  );
}

export default App;
