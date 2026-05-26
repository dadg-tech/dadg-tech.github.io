import { ChevronRight } from 'lucide-react';

type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <ChevronRight className="h-6 w-6 text-neon" strokeWidth={2.4} />
      <h2 className="font-display text-2xl font-bold text-neon sm:text-3xl">
        {children}
      </h2>
      <div className="h-px flex-1 border-t border-dashed border-neon/35" />
    </div>
  );
}
