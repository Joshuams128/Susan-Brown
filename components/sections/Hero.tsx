import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/cn';

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-32',
        backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-mint-50 to-tan-50'
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/50" />
      )}
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className={cn(
            'font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
            backgroundImage && overlay ? 'text-white' : 'text-charcoal'
          )}>
            {headline}
          </h1>
          
          {subheadline && (
            <p className={cn(
              'text-lg md:text-xl mb-8',
              backgroundImage && overlay ? 'text-gray-100' : 'text-gray-700'
            )}>
              {subheadline}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Button href={primaryCTA.href} size="lg">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="outline" size="lg">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
