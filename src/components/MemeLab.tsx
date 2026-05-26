import { MEMES } from '../data/memes';
import { SectionTitle } from './SectionTitle';

export function MemeLab() {
  return (
    <section id="ogre-mode">
      <SectionTitle>Meme Lab</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {MEMES.map(({ title, copy, link, Icon }) => (
          <a className="meme-card" href={link} key={title}>
            <div className="meme-icon">
              <Icon className="h-7 w-7" strokeWidth={1.9} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
