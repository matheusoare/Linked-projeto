import React from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Services />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
};

//Organização do site

export default App;
