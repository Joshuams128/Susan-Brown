import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import WorkshopCard from '@/components/WorkshopCard';
import { workshops } from '@/data/workshops';

export default function WorkshopHighlights() {
  const featuredWorkshops = workshops.filter((w) => w.featured);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <SectionHeading centered className="mb-4">
            Workshops Designed for Real Impact
          </SectionHeading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your team, your group, or your organization deserves more than &ldquo;inspiration.&rdquo; 
            My workshops give practical tools and immediate results that participants can use the moment they leave the room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workshops.slice(0, 3).map((workshop) => (
            <WorkshopCard key={workshop.slug} {...workshop} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button href="/book">Book a Workshop</Button>
          <Button href="/workshops" variant="outline">
            View All Workshops
          </Button>
        </div>
      </Container>
    </section>
  );
}
