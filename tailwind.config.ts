import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05080d',
        panel: '#07111d',
        line: '#17324a',
        neon: '#22b8ff',
        ink: '#e6f1ff',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', '"SFMono-Regular"', 'Consolas', 'monospace'],
        display: ['"Space Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 34px rgba(34, 184, 255, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
