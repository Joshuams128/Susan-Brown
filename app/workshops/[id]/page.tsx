import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { workshops } from '@/data/workshops';

interface WorkshopPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    id: workshop.slug,
  }));
}

export async function generateMetadata({ params }: WorkshopPageProps): Promise<Metadata> {
  const { id } = await params;
  const workshop = workshops.find((w) => w.slug === id);
  
  if (!workshop) {
    return {
      title: 'Workshop Not Found',
    };
  }

  return {
    title: `${workshop.title} | Susan M. Brown Workshops`,
    description: workshop.tagline + ' - ' + workshop.description.substring(0, 100),
  };
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
  const { id } = await params;
  const workshop = workshops.find((w) => w.slug === id);

  if (!workshop) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-mint-50 to-tan-50">
        <Container>
          <div className="max-w-3xl">
            {workshop.featured && (
              <div className="inline-block bg-mint-400 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                Featured Workshop
              </div>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
              {workshop.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              {workshop.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/book" size="lg">
                Book This Workshop
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Ask a Question
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading className="mb-8">
              About This Workshop
            </SectionHeading>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {workshop.description}
            </p>

            <SectionHeading level={3} className="mb-6">
              What Participants Will Learn
            </SectionHeading>
            <ul className="space-y-4 mb-12">
              {workshop.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700">{outcome}</p>
                </li>
              ))}
            </ul>

            <SectionHeading level={3} className="mb-4">
              Ideal For
            </SectionHeading>
            <p className="text-lg text-gray-700 mb-12">{workshop.idealFor}</p>

            <div className="bg-tan-50 p-8 rounded-lg">
              <h4 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Format Options
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-mint-400">•</span>
                  90-minute session
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-mint-400">•</span>
                  Half-day intensive
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-mint-400">•</span>
                  Full-day workshop
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-mint-400">•</span>
                  Virtual or in-person
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mint-400 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Book This Workshop?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Let&apos;s discuss how this workshop can support your team or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" variant="secondary" size="lg">
                Schedule a Call
              </Button>
              <Button href="/workshops" variant="outline" size="lg">
                View All Workshops
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
