import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import WorkshopCard from '@/components/WorkshopCard';
import CTASection from '@/components/sections/CTASection';
import { workshops } from '@/data/workshops';

export const metadata: Metadata = {
  title: 'Workshops | Susan M. Brown',
  description: 'Explore trauma-informed workshops including Strong From the Inside Out™, Confident & Unshakable™, and more.',
};

export default function WorkshopsPage() {
  return (
    <>
      <Hero
        headline="Workshops That Create Real Change"
        subheadline="Practical, trauma-informed sessions designed for teams, caregivers, and organizations."
      />

      {/* Why Organizations Work With Me */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading centered className="mb-12">
            Why Organizations Work With Me
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Trauma-informed facilitation</h3>
                <p className="text-gray-600">Safe and inclusive for all participants</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Evidence-based strategies</h3>
                <p className="text-gray-600">Tools grounded in real psychology and neuroscience</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Interactive & engaging</h3>
                <p className="text-gray-600">Workshops that participants remember and apply</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Outcome-focused</h3>
                <p className="text-gray-600">Teams leave stronger, more confident, and productive</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-mint-400 text-white px-8 py-3 rounded-lg hover:bg-mint-500 transition-colors">
              Book Your Workshop Today
            </button>
          </div>
        </Container>
      </section>

      {/* Workshops Grid */}
      <section className="py-16 md:py-24 bg-tan-50">
        <Container>
          <SectionHeading centered className="mb-12">
            Available Workshops
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.slug} {...workshop} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to bring one of these workshops to your team?"
        primaryCTA={{ label: 'Book a Workshop', href: '/book' }}
        secondaryCTA={{ label: 'Contact Me', href: '/contact' }}
        background="mint"
      />
    </>
  );
}
