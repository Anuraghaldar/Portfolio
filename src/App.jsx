import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="cosmic-shell text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
