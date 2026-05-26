import { ChevronRight } from 'lucide-react';
import { SITE_LINKS } from '../config/site';
import { useDadgRepos } from '../hooks/useDadgRepos';
import { RepoCard } from './RepoCard';
import { SectionTitle } from './SectionTitle';

export function Projects() {
  const { repos, loading, error } = useDadgRepos();

  return (
    <section id="projects" className="scroll-mt-8">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-3">
        {loading && (
          <div className="status-panel">
            <span className="terminal-cursor">Loading projects</span>
          </div>
        )}
        {!loading && error && <div className="status-panel">{error}</div>}
        {!loading && !error && repos.length === 0 && (
          <div className="status-panel">No public projects found.</div>
        )}
        {!loading &&
          !error &&
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
      <div className="mt-8 text-center">
        <a
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-neon transition hover:text-ink"
          href={SITE_LINKS.github}
        >
          View all projects on GitHub
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
