'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface WeeklyOutlineItem {
  week: number;
  topic: string;
  focus: string;
}

interface WorkshopInfo {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  format: string;
  price: string;
  icon: string;
  overview: string;
  whoFor: string[];
  whatYouWillLearn: string[];
  weeklyOutline: WeeklyOutlineItem[];
}

const workshopData: Record<string, WorkshopInfo> = {
  'healing-from-trauma': {
    title: 'Healing from Trauma',
    subtitle: 'A Journey Toward Wholeness',
    description: 'Discover tools and practices for processing and healing from traumatic experiences in a safe, supportive environment.',
    duration: '8 weeks',
    format: 'Weekly 2-hour sessions',
    price: '$480',
    icon: '🌱',
    overview: 'This comprehensive 8-week program provides a gentle, trauma-informed approach to healing. Drawing on evidence-based practices including Somatic Experiencing, mindfulness, and Internal Family Systems, participants will learn to work with trauma in ways that honor their unique journey and timeline.',
    whoFor: [
      'Individuals seeking to heal from past traumatic experiences',
      'Those experiencing symptoms of PTSD or complex trauma',
      'Anyone wanting to understand trauma and its effects',
      'People ready to engage in deep healing work',
    ],
    whatYouWillLearn: [
      'Understanding how trauma affects the brain, body, and nervous system',
      'Somatic techniques for releasing stored trauma',
      'Building a foundation of safety and stabilization',
      'Working with difficult emotions and memories',
      'Self-regulation and grounding practices',
      'Developing self-compassion and resilience',
      'Creating meaning and integration',
    ],
    weeklyOutline: [
      { week: 1, topic: 'Understanding Trauma', focus: 'Education and foundation building' },
      { week: 2, topic: 'Safety and Stabilization', focus: 'Creating internal and external safety' },
      { week: 3, topic: 'Body Awareness', focus: 'Connecting with somatic experience' },
      { week: 4, topic: 'Working with Emotions', focus: 'Emotional processing techniques' },
      { week: 5, topic: 'Nervous System Regulation', focus: 'Tools for self-regulation' },
      { week: 6, topic: 'Integration I', focus: 'Making meaning of experiences' },
      { week: 7, topic: 'Integration II', focus: 'Moving forward with new understanding' },
      { week: 8, topic: 'Closing and Continuation', focus: 'Celebrating growth and planning ahead' },
    ],
  },
  'building-resilience': {
    title: 'Building Resilience',
    subtitle: 'Cultivating Inner Strength',
    description: 'Strengthen your inner resources and develop practical strategies for navigating life\'s challenges with grace.',
    duration: '6 weeks',
    format: 'Weekly 90-minute sessions',
    price: '$360',
    icon: '🌟',
    overview: 'This 6-week workshop focuses on developing resilience—the capacity to adapt and thrive in the face of adversity. Through a combination of education, experiential practices, and supportive community, participants will build sustainable tools for navigating stress and challenges.',
    whoFor: [
      'Anyone facing ongoing stress or challenges',
      'Individuals wanting to strengthen coping skills',
      'People in transition or facing change',
      'Those seeking to build emotional resilience',
    ],
    whatYouWillLearn: [
      'The neuroscience of resilience',
      'Identifying and building on existing strengths',
      'Stress management techniques',
      'Mindfulness and present-moment awareness',
      'Adaptive coping strategies',
      'Creating sustainable self-care practices',
      'Building supportive connections',
    ],
    weeklyOutline: [
      { week: 1, topic: 'Understanding Resilience', focus: 'What resilience is and isn\'t' },
      { week: 2, topic: 'Stress and the Nervous System', focus: 'How stress affects us' },
      { week: 3, topic: 'Mindfulness Practices', focus: 'Present-moment awareness' },
      { week: 4, topic: 'Adaptive Coping', focus: 'Healthy responses to stress' },
      { week: 5, topic: 'Self-Care Foundations', focus: 'Sustainable well-being practices' },
      { week: 6, topic: 'Integration', focus: 'Moving forward with resilience' },
    ],
  },
  'mindful-self-compassion': {
    title: 'Mindful Self-Compassion',
    subtitle: 'Treating Yourself with Kindness',
    description: 'Learn to treat yourself with kindness and understanding through evidence-based mindfulness practices.',
    duration: '4 weeks',
    format: 'Weekly 2-hour sessions',
    price: '$280',
    icon: '💚',
    overview: 'Based on the Mindful Self-Compassion (MSC) program developed by Kristin Neff and Christopher Germer, this 4-week workshop teaches core principles and practices of self-compassion. Participants will learn to respond to their own struggles with kindness rather than self-criticism.',
    whoFor: [
      'Those struggling with self-criticism or harsh inner dialogue',
      'Anyone wanting to develop greater self-acceptance',
      'Individuals interested in mindfulness practices',
      'People seeking emotional balance and well-being',
    ],
    whatYouWillLearn: [
      'The three components of self-compassion',
      'Mindfulness meditation practices',
      'Self-compassion exercises and meditations',
      'Working with difficult emotions',
      'Developing a compassionate inner voice',
      'Self-kindness vs. self-indulgence',
      'Compassion for others and the world',
    ],
    weeklyOutline: [
      { week: 1, topic: 'Foundations of Self-Compassion', focus: 'Understanding the practice' },
      { week: 2, topic: 'Mindfulness', focus: 'Present-moment awareness with kindness' },
      { week: 3, topic: 'Common Humanity', focus: 'We\'re all in this together' },
      { week: 4, topic: 'Integration', focus: 'Living with self-compassion' },
    ],
  },
  'emotional-regulation': {
    title: 'Emotional Regulation',
    subtitle: 'Working with Difficult Emotions',
    description: 'Develop skills to understand, manage, and work with difficult emotions in healthy ways.',
    duration: '6 weeks',
    format: 'Weekly 90-minute sessions',
    price: '$360',
    icon: '🌊',
    overview: 'This 6-week workshop provides practical tools for understanding and working with emotions. Drawing on dialectical behavior therapy (DBT), mindfulness, and somatic approaches, participants will learn to navigate their emotional landscape with greater ease and skill.',
    whoFor: [
      'Those experiencing intense or overwhelming emotions',
      'Individuals wanting to understand their emotional patterns',
      'People seeking healthier ways to cope with feelings',
      'Anyone interested in emotional intelligence',
    ],
    whatYouWillLearn: [
      'Understanding emotions and their functions',
      'Identifying triggers and patterns',
      'The window of tolerance concept',
      'Emotion regulation strategies',
      'Mindfulness of emotions',
      'Distress tolerance skills',
      'Building emotional balance',
    ],
    weeklyOutline: [
      { week: 1, topic: 'Emotional Landscape', focus: 'Understanding your emotions' },
      { week: 2, topic: 'Triggers and Patterns', focus: 'Identifying what sets us off' },
      { week: 3, topic: 'Window of Tolerance', focus: 'Finding your optimal zone' },
      { week: 4, topic: 'Regulation Techniques', focus: 'Practical skills for balance' },
      { week: 5, topic: 'Distress Tolerance', focus: 'Getting through tough moments' },
      { week: 6, topic: 'Integration', focus: 'Living with emotional wisdom' },
    ],
  },
  'somatic-healing': {
    title: 'Somatic Healing',
    subtitle: 'Reconnecting with Body Wisdom',
    description: 'Connect with your body\'s wisdom and release stored trauma through gentle, body-based practices.',
    duration: '8 weeks',
    format: 'Weekly 2-hour sessions',
    price: '$480',
    icon: '🌸',
    overview: 'This 8-week program focuses on the body as a pathway to healing. Through gentle, trauma-informed somatic practices, participants will learn to listen to their body\'s wisdom, release stored tension and trauma, and cultivate a more compassionate relationship with their physical self.',
    whoFor: [
      'Those interested in body-based healing approaches',
      'Individuals experiencing chronic tension or pain',
      'People wanting to reconnect with their body',
      'Anyone seeking to release stored trauma',
    ],
    whatYouWillLearn: [
      'Principles of somatic psychology',
      'Body awareness and scanning practices',
      'Understanding the body\'s stress response',
      'Gentle movement and embodiment',
      'Releasing stored tension and trauma',
      'Nervous system regulation through the body',
      'Integrating mind and body',
    ],
    weeklyOutline: [
      { week: 1, topic: 'Introduction to Somatic Healing', focus: 'Body as resource' },
      { week: 2, topic: 'Body Awareness', focus: 'Learning to listen' },
      { week: 3, topic: 'The Stress Response', focus: 'Understanding fight/flight/freeze' },
      { week: 4, topic: 'Gentle Movement', focus: 'Movement as medicine' },
      { week: 5, topic: 'Releasing Tension', focus: 'Working with stored energy' },
      { week: 6, topic: 'Nervous System Regulation', focus: 'Body-based calming' },
      { week: 7, topic: 'Integration I', focus: 'Bringing it all together' },
      { week: 8, topic: 'Integration II', focus: 'Continuing your practice' },
    ],
  },
};

export default function WorkshopDetail() {
  const params = useParams();
  const id = params?.id as string;
  const workshop = workshopData[id];

  if (!workshop) {
    return (
      <div className="min-h-screen bg-tan">
        <Header />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4">
              Workshop Not Found
            </h1>
            <Link href="/workshops" className="text-mint hover:underline">
              Return to Workshops
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tan">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">{workshop.icon}</div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
                {workshop.title}
              </h1>
              <p className="text-2xl text-mint font-serif mb-6">
                {workshop.subtitle}
              </p>
              <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                {workshop.description}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-tan px-6 py-3 rounded-full">
                <span className="text-charcoal/60 mr-2">⏱</span>
                <span className="font-semibold text-charcoal">{workshop.duration}</span>
              </div>
              <div className="bg-tan px-6 py-3 rounded-full">
                <span className="text-charcoal/60 mr-2">📅</span>
                <span className="font-semibold text-charcoal">{workshop.format}</span>
              </div>
              <div className="bg-mint px-6 py-3 rounded-full">
                <span className="text-white/80 mr-2">💰</span>
                <span className="font-semibold text-white">{workshop.price}</span>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/book"
                className="inline-block bg-mint text-white px-8 py-4 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-lg"
              >
                Register for This Workshop
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                Overview
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {workshop.overview}
              </p>
            </motion.div>

            {/* Who This Is For */}
            <motion.div
              className="bg-mint/10 rounded-lg p-8 md:p-12 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                Who This Workshop Is For
              </h2>
              <ul className="space-y-3">
                {workshop.whoFor.map((item, index) => (
                  <li key={index} className="flex items-start text-lg text-charcoal/80">
                    <span className="text-mint mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                What You'll Learn
              </h2>
              <ul className="space-y-3">
                {workshop.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start text-lg text-charcoal/80">
                    <span className="text-mint mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Weekly Outline */}
            <motion.div
              className="bg-tan rounded-lg p-8 md:p-12 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                Weekly Outline
              </h2>
              <div className="space-y-4">
                {workshop.weeklyOutline.map((week, index) => (
                  <div key={index} className="border-l-4 border-mint pl-6 py-2">
                    <h3 className="font-semibold text-charcoal text-lg">
                      Week {week.week}: {week.topic}
                    </h3>
                    <p className="text-charcoal/70">{week.focus}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-mint">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Take the next step in your healing journey. Register now or schedule 
              a consultation to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-white text-mint px-8 py-4 rounded-full hover:bg-tan transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Register Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-mint transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
