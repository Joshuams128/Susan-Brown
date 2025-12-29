import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact | Susan M. Brown',
  description: 'Get in touch to book a workshop or ask questions about bringing trauma-informed training to your team.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Let's Connect"
        subheadline="Have questions about a workshop or want to book a session for your team? I'd love to hear from you."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading level={3} className="mb-6">
                Send a Message
              </SectionHeading>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading level={3} className="mb-6">
                Get in Touch
              </SectionHeading>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Email</h4>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="text-mint-400 hover:text-mint-500 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Social Links</h4>
                  <div className="flex gap-4">
                    {siteConfig.socials.linkedin && (
                      <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mint-400 hover:text-mint-500 transition-colors"
                        aria-label="LinkedIn"
                      >
                        LinkedIn
                      </a>
                    )}
                    {siteConfig.socials.instagram && (
                      <a
                        href={siteConfig.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mint-400 hover:text-mint-500 transition-colors"
                        aria-label="Instagram"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                </div>

                <div className="bg-tan-50 p-6 rounded-lg mt-8">
                  <h4 className="font-semibold text-charcoal mb-3">
                    Prefer to schedule a call?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Book a discovery call to discuss your workshop needs and how I can support your team.
                  </p>
                  <a
                    href="/book"
                    className="inline-block bg-mint-400 text-white px-6 py-3 rounded-lg hover:bg-mint-500 transition-colors"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
