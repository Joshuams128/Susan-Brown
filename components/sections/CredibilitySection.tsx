import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface CredibilityItem {
  icon?: React.ReactNode;
  text: string;
}

const credibilityItems: CredibilityItem[] = [
  { text: '15+ Years as a Foster Parent' },
  { text: 'Trauma-Informed Certified Practitioner' },
  { text: 'Creator of Strong From the Inside Out™ Workshop' },
];

export default function CredibilitySection() {
  return (
    <section className="py-16 md:py-24 bg-mint-50">
      <Container>
        <SectionHeading centered className="mb-12">
          Trusted by Organizations and Caregivers
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {credibilityItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="text-lg text-charcoal font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/book">Book a Workshop</Button>
        </div>
      </Container>
    </section>
  );
}
