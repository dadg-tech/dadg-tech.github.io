import { Disc3, Music2, ToggleRight, type LucideIcon } from 'lucide-react';

export type MemeItem = {
  title: string;
  copy: string;
  link: string;
  Icon: LucideIcon;
};

export const MEMES: MemeItem[] = [
  {
    title: 'Ogre Mode',
    copy: 'Green accents, swamp-grade confidence, zero character assets stolen.',
    link: '#ogre-mode',
    Icon: ToggleRight,
  },
  {
    title: 'Shrekophone',
    copy: 'A deployment alarm that probably plays better than CI logs read.',
    link: 'https://www.youtube.com/results?search_query=shrekophone',
    Icon: Music2,
  },
  {
    title: 'Rickroll Fallback',
    copy: 'When the API is down, the link still works. That is reliability.',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    Icon: Disc3,
  },
];
