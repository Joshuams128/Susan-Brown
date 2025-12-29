import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-tan-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading className="mb-6">Hi, I&apos;m Susan M. Brown</SectionHeading>
            <p className="text-gray-700 mb-4">
              I&apos;m a trauma-informed workshop facilitator, foster parent of 15+ years, 
              and creator of Strong From the Inside Out™ workshops.
            </p>
            <p className="text-gray-700 mb-6">
              I&apos;ve spent over a decade helping women, caregivers, and teams navigate 
              high-stress environments and life transitions. My workshops are built from 
              real experience and practical tools — not fluff or motivational speeches.
            </p>
            <Button href="/about">Learn About Me</Button>
          </div>
          
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Susan&apos;s Photo
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
