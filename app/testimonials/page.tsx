import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import Button from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Susan M. Brown Workshops',
  description: 'Real feedback from workshop participants including foster parents, caregivers, and teams.',
};

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        headline="What Participants Say"
        subheadline="Real stories from caregivers, teams, and individuals who have experienced these workshops."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <SectionHeading level={3} className="mb-6">
              Ready to Experience It Yourself?
            </SectionHeading>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join the many individuals and organizations who have transformed their approach 
              to stress, confidence, and resilience through these workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" size="lg">
                Book a Workshop
              </Button>
              <Button href="/workshops" variant="outline" size="lg">
                View Workshops
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
