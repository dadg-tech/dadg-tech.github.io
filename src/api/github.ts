export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

const REPOS_URL = 'https://api.github.com/orgs/dadg-tech/repos';

export async function fetchDadgRepos(signal?: AbortSignal): Promise<GitHubRepo[]> {
  const response = await fetch(REPOS_URL, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  const repos = (await response.json()) as GitHubRepo[];

  return repos
    .filter((repo) => !repo.fork)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
}
