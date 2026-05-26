import { SITE_COPY } from '../config/site';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line/70 px-4 py-8 text-center font-mono text-sm text-ink/68 sm:text-base">
      {SITE_COPY.footer}
    </footer>
  );
}
