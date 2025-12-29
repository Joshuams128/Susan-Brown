import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Book a Workshop | Susan M. Brown',
  description: 'Schedule a discovery call or book a workshop for your team or organization.',
};

export default function BookPage() {
  return (
    <>
      <Hero
        headline="Book a Workshop"
        subheadline="Schedule a discovery call to discuss how we can bring practical tools and lasting change to your team."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container size="md">
          <CalendlyEmbed url={siteConfig.calendlyUrl} />
          
          <div className="mt-12 text-center bg-tan-50 p-8 rounded-lg">
            <SectionHeading level={3} className="mb-4">
              Not ready to book? Have questions first?
            </SectionHeading>
            <p className="text-gray-700 mb-6">
              Feel free to reach out via the contact form with any questions about workshops, 
              pricing, or custom programs for your organization.
            </p>
            <a
              href="/contact"
              className="inline-block bg-mint-400 text-white px-8 py-3 rounded-lg hover:bg-mint-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
