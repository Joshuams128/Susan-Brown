import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
  centered?: boolean;
}

export default function SectionHeading({
  children,
  className,
  level = 2,
  centered = false,
}: SectionHeadingProps) {
  const baseStyles = 'font-serif text-charcoal';
  const centerStyles = centered ? 'text-center' : '';

  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
  };

  const Heading = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';

  return (
    <Heading className={cn(baseStyles, sizes[level], centerStyles, className)}>
      {children}
    </Heading>
  );
}
