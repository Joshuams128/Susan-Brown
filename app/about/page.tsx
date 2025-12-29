import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Susan M. Brown | Workshop Facilitator & Foster Parent',
  description: "Learn about Susan's journey from surviving to strong, her credentials, and her mission to help others build resilience.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Trauma-Informed Workshop Facilitator | Foster Parent | Creator of Strong From the Inside Out™"
      />

      {/* My Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading centered className="mb-12">
            From Surviving to Strong
          </SectionHeading>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              For most of my life, I moved through the world quietly. I thought shrinking 
              was safer than taking up space. Life, motherhood, and 15+ years fostering 
              children with big feelings and even bigger stories taught me something profound:
            </p>
            
            <p className="font-semibold text-charcoal italic">
              Strength isn&apos;t loud. Strength is steady. Strength is who you decide to 
              become when the world gets heavy.
            </p>
            
            <p>
              My journey hasn&apos;t been perfect. It&apos;s been messy, emotional, and 
              transformative. I had to learn how to regulate my nervous system. I had to 
              unlearn the belief that I wasn&apos;t enough. I had to rebuild myself piece by piece.
            </p>
            
            <p>Through that process, I found something powerful:</p>
            
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>My voice</li>
              <li>My confidence</li>
              <li>My purpose</li>
            </ul>
            
            <p>
              And now, I bring that experience to groups, teams, and organizations, teaching 
              tools and strategies that build resilience, confidence, and emotional strength 
              from the inside out.
            </p>
          </div>
        </Container>
      </section>

      {/* Credibility Section */}
      <section className="py-16 md:py-24 bg-tan-50">
        <Container>
          <SectionHeading centered className="mb-8">
            Why You Can Trust Me
          </SectionHeading>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            I&apos;m a trauma-informed certified facilitator with extensive experience designing 
            and delivering workshops for women, caregivers, and high-performing teams.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                ✓
              </div>
              <p className="text-gray-700">
                15+ years as a foster parent, guiding children through emotional and behavioral challenges
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                ✓
              </div>
              <p className="text-gray-700">
                Creator of the Strong From the Inside Out™ workshop series, focusing on nervous 
                system regulation, confidence, and resilience
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                ✓
              </div>
              <p className="text-gray-700">
                Experienced facilitator for organizations, nonprofits, and caregiver associations
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                ✓
              </div>
              <p className="text-gray-700">
                Workshops combine practical tools, neuroscience-informed strategies, and emotional support
              </p>
            </div>
          </div>
          
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto font-semibold">
            My workshops are interactive, practical, and designed to create real, lasting results.
          </p>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading centered className="mb-8">
            My Mission
          </SectionHeading>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              I help women, caregivers, and teams:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Build emotional resilience and steady confidence
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Reduce stress and prevent burnout
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Gain practical tools they can use immediately in life and work
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Step into their power with clarity and courage
                </p>
              </li>
            </ul>
            
            <p className="text-lg text-gray-700 text-center italic">
              I believe that strong, confident individuals create stronger teams, communities, 
              and organizations — and my workshops are designed to make that happen.
            </p>
          </div>
        </Container>
      </section>

      {/* Why My Workshops Work */}
      <section className="py-16 md:py-24 bg-mint-50">
        <Container>
          <SectionHeading centered className="mb-8">
            Why My Workshops Work
          </SectionHeading>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Because I&apos;ve been there. I know what it feels like to feel overwhelmed, 
            undervalued, or drained. I also know what it takes to reclaim confidence, regulate 
            your nervous system, and stand steady in any situation. When you work with me, 
            you&apos;re not just getting a facilitator — you&apos;re getting someone who has 
            walked the journey, mastered the tools, and delivers workshops that actually work.
          </p>
        </Container>
      </section>

      <CTASection
        headline="Ready to bring confidence, resilience, and practical tools to your team or group?"
        primaryCTA={{ label: 'Book a Workshop', href: '/book' }}
        secondaryCTA={{ label: 'View Workshops', href: '/workshops' }}
        background="mint"
      />
    </>
  );
}
