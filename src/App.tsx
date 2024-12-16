import React from 'react';
import './App.css';
import SocialIcon from './sections/SocialIcon';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import Scroll from './sections/Scroll';

function App() {
  return (
    <div className="App h-screen w-[80%] m-auto py-4" >
  <SocialIcon />
  <Header />
  <Scroll />
  <HeroSection />
    </div>
    
  );
}

export default App;
