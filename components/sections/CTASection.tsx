import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/cn';

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  background?: 'mint' | 'tan' | 'white';
}

export default function CTASection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  background = 'mint',
}: CTASectionProps) {
  const backgrounds = {
    mint: 'bg-mint-400 text-white',
    tan: 'bg-tan-100 text-charcoal',
    white: 'bg-white text-charcoal',
  };

  return (
    <section className={cn('py-16 md:py-24', backgrounds[background])}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {headline}
          </h2>
          
          {subheadline && (
            <p className={cn(
              'text-lg md:text-xl mb-8',
              background === 'mint' ? 'text-white/90' : 'text-gray-700'
            )}>
              {subheadline}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href={primaryCTA.href} 
              variant={background === 'mint' ? 'secondary' : 'primary'}
              size="lg"
            >
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button 
                href={secondaryCTA.href} 
                variant="outline" 
                size="lg"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
