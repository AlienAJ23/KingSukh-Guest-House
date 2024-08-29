import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Rooms from './Components/Rooms';
import Services from './Components/Services';
import Achievements from './Components/Achievements';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Rooms />
      <Services />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
