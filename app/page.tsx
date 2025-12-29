import Hero from '@/components/sections/Hero';
import WorkshopHighlights from '@/components/sections/WorkshopHighlights';
import AboutPreview from '@/components/sections/AboutPreview';
import CredibilitySection from '@/components/sections/CredibilitySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero
        headline="Workshops That Build Confidence, Resilience & Strength – From the Inside Out"
        subheadline="I create practical, trauma-informed workshops for women, caregivers, and teams who want to feel grounded, confident, and fully capable — no theory, no fluff, just tools that work."
        primaryCTA={{ label: 'Book a Workshop', href: '/book' }}
        secondaryCTA={{ label: 'Learn About Workshops', href: '/workshops' }}
      />
      
      <WorkshopHighlights />
      
      <AboutPreview />
      
      <CredibilitySection />
      
      <TestimonialsSection />
      
      <CTASection
        headline="Bring One of These Workshops to Your Team"
        subheadline="Let's give your group the tools, confidence, and resilience they need to thrive."
        primaryCTA={{ label: 'Book a Workshop', href: '/book' }}
        secondaryCTA={{ label: 'Contact Me', href: '/contact' }}
      />
    </>
  );
}
