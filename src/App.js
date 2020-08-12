import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Intro from './components/Intro';

function App() {
  return (
    <div>
      <Navigation />
      <Intro />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
