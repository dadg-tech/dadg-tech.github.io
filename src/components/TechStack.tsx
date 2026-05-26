import { TECH_STACK } from '../data/techStack';
import { SectionTitle } from './SectionTitle';

export function TechStack() {
  return (
    <section>
      <SectionTitle>Tech Stack</SectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {TECH_STACK.map(({ name, Icon }) => (
          <div className="stack-card" key={name}>
            <Icon className="h-10 w-10 text-neon" strokeWidth={1.8} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
