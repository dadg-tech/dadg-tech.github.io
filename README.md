# DADG Labs Landing Page

Public landing page for the `dadg-tech` GitHub organization.

## Stack

- React
- Vite
- Tailwind CSS
- GitHub Pages compatible static build

## Development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Run TypeScript checks without building:

```bash
npm run typecheck
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This repository is prepared for deployment as `dadg-tech.github.io`.

1. Push the project to `https://github.com/dadg-tech/dadg-tech.github.io`.
2. In GitHub, open repository settings.
3. Go to **Pages**.
4. Set the source to **GitHub Actions**.
5. Push to `main`; `.github/workflows/deploy.yml` builds and publishes `dist`.

The app does not use a backend or a GitHub token. Public repositories are loaded from:

```text
https://api.github.com/orgs/dadg-tech/repos
```

If the GitHub API is unavailable, the Projects section shows a fallback message.
