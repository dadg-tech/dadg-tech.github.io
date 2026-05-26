import { ChevronRight, Github, ToggleLeft, ToggleRight } from 'lucide-react';
import { SITE_COPY, SITE_LINKS } from '../config/site';

type HeroProps = {
  ogreMode: boolean;
  onToggleOgreMode: () => void;
};

export function Hero({ ogreMode, onToggleOgreMode }: HeroProps) {
  return (
    <section className="hero-grid relative overflow-hidden border border-line/80 px-5 py-20 text-center shadow-neon sm:px-8 md:py-28">
      <div className="pixel-corners" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <img
          className="mx-auto mb-8 h-32 w-32 rounded-md border border-neon/60 object-cover shadow-neon sm:h-40 sm:w-40"
          src="/assets/dadg-logo.png"
          alt="DADG pixel pig logo"
          width="160"
          height="160"
        />
        <h1 className="font-display text-5xl font-bold leading-none text-neon sm:text-7xl md:text-8xl">
          {SITE_COPY.title}
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-balance font-mono text-xl font-semibold leading-relaxed text-ink/90 sm:text-2xl">
          {SITE_COPY.subtitle}
        </p>
        <p className="mt-5 font-mono text-base text-ink/70 sm:text-lg">
          {SITE_COPY.supporting}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a className="btn btn-primary" href={SITE_LINKS.github}>
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a className="btn btn-secondary" href="#projects">
            Projects
            <ChevronRight className="h-5 w-5" />
          </a>
          <button
            className="btn btn-meme"
            type="button"
            onClick={onToggleOgreMode}
            aria-pressed={ogreMode}
          >
            {ogreMode ? (
              <ToggleRight className="h-5 w-5" />
            ) : (
              <ToggleLeft className="h-5 w-5" />
            )}
            Ogre Mode
          </button>
        </div>
      </div>
    </section>
  );
}
