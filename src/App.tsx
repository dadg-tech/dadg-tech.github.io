import { useState } from 'react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MemeLab } from './components/MemeLab';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';

export function App() {
  const [ogreMode, setOgreMode] = useState(false);

  return (
    <main className={`min-h-screen bg-void text-ink ${ogreMode ? 'ogre-mode' : ''}`}>
      <div className="scanline" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-4 sm:px-6 lg:px-8">
        <Hero
          ogreMode={ogreMode}
          onToggleOgreMode={() => setOgreMode((value) => !value)}
        />
        <Projects />
        <TechStack />
        <MemeLab />
      </div>
      <Footer />
    </main>
  );
}
