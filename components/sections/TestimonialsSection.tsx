import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading centered className="mb-12">
          What Participants Say
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
