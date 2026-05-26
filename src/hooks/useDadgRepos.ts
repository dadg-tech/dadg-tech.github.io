import { useEffect, useState } from 'react';
import { fetchDadgRepos, type GitHubRepo } from '../api/github';

type UseDadgReposState = {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
};

export function useDadgRepos(): UseDadgReposState {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchDadgRepos(controller.signal)
      .then(setRepos)
      .catch((reason: unknown) => {
        if (reason instanceof DOMException && reason.name === 'AbortError') {
          return;
        }
        setError('Projects are temporarily unavailable. Check GitHub directly.');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { repos, loading, error };
}
