import {
  Bot,
  Boxes,
  BrainCircuit,
  Code2,
  Container,
  ServerCog,
  type LucideIcon,
} from 'lucide-react';

export type TechStackItem = {
  name: string;
  Icon: LucideIcon;
};

export const TECH_STACK: TechStackItem[] = [
  { name: 'Python', Icon: Code2 },
  { name: 'React', Icon: Boxes },
  { name: 'Docker', Icon: Container },
  { name: 'Telegram Bots', Icon: Bot },
  { name: 'AI Agents', Icon: BrainCircuit },
  { name: 'DevOps', Icon: ServerCog },
];
