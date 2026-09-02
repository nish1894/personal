import React from 'react';
import { PERSONAL_INFO } from './data/portfolio';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const rawBase = import.meta.env.BASE_URL || './';
  const baseUrl = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const resumeUrl = `${baseUrl}${PERSONAL_INFO.resumeFileName}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8] text-[#1c2024] font-sans antialiased">
      {/* Sticky Navigation */}
      <Navigation resumeUrl={resumeUrl} />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-hidden">
        <Hero resumeUrl={resumeUrl} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact resumeUrl={resumeUrl} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
