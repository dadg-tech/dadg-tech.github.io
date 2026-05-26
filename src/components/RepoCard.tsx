import { ExternalLink, Star } from 'lucide-react';
import type { GitHubRepo } from '../api/github';
import { LANGUAGE_COLORS } from '../data/languageColors';
import { formatUpdatedAt } from '../lib/date';

type RepoCardProps = {
  repo: GitHubRepo;
};

export function RepoCard({ repo }: RepoCardProps) {
  const language = repo.language ?? 'Unknown';
  const color = LANGUAGE_COLORS[language] ?? '#22b8ff';

  return (
    <article className="project-card group">
      <div className="min-w-0">
        <h3 className="truncate font-display text-xl font-bold text-neon sm:text-2xl">
          {repo.name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink/72 sm:text-base">
          {repo.description || 'No description yet.'}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/68">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            {language}
          </span>
          <span className="hidden text-line sm:inline">|</span>
          <span className="inline-flex items-center gap-2">
            <Star className="h-4 w-4" />
            {repo.stargazers_count}
          </span>
          <span className="hidden text-line sm:inline">|</span>
          <span>Updated {formatUpdatedAt(repo.updated_at)}</span>
        </div>
      </div>
      <a
        className="repo-link"
        href={repo.html_url}
        aria-label={`Open ${repo.name} on GitHub`}
      >
        <ExternalLink className="h-6 w-6" />
      </a>
    </article>
  );
}
