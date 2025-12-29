'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const workshops = [
  {
    id: 'healing-from-trauma',
    title: 'Healing from Trauma',
    description: 'Discover tools and practices for processing and healing from traumatic experiences in a safe, supportive environment.',
    duration: '8 weeks',
    format: 'Weekly 2-hour sessions',
    price: '$480',
    icon: '🌱',
    highlights: [
      'Understanding trauma and its effects',
      'Somatic experiencing techniques',
      'Building safety and stabilization',
      'Processing difficult emotions',
      'Integration and moving forward',
    ],
  },
  {
    id: 'building-resilience',
    title: 'Building Resilience',
    description: 'Strengthen your inner resources and develop practical strategies for navigating life\'s challenges with grace.',
    duration: '6 weeks',
    format: 'Weekly 90-minute sessions',
    price: '$360',
    icon: '🌟',
    highlights: [
      'Cultivating inner strength',
      'Stress management tools',
      'Adaptive coping strategies',
      'Mindfulness practices',
      'Creating sustainable self-care',
    ],
  },
  {
    id: 'mindful-self-compassion',
    title: 'Mindful Self-Compassion',
    description: 'Learn to treat yourself with kindness and understanding through evidence-based mindfulness practices.',
    duration: '4 weeks',
    format: 'Weekly 2-hour sessions',
    price: '$280',
    icon: '💚',
    highlights: [
      'Self-compassion foundations',
      'Mindfulness meditation',
      'Working with difficult emotions',
      'Self-kindness practices',
      'Building a compassionate voice',
    ],
  },
  {
    id: 'emotional-regulation',
    title: 'Emotional Regulation',
    description: 'Develop skills to understand, manage, and work with difficult emotions in healthy ways.',
    duration: '6 weeks',
    format: 'Weekly 90-minute sessions',
    price: '$360',
    icon: '🌊',
    highlights: [
      'Understanding your emotional landscape',
      'Identifying triggers and patterns',
      'Regulation techniques',
      'Window of tolerance expansion',
      'Creating emotional balance',
    ],
  },
  {
    id: 'somatic-healing',
    title: 'Somatic Healing',
    description: 'Connect with your body\'s wisdom and release stored trauma through gentle, body-based practices.',
    duration: '8 weeks',
    format: 'Weekly 2-hour sessions',
    price: '$480',
    icon: '🌸',
    highlights: [
      'Body awareness practices',
      'Releasing stored tension',
      'Nervous system regulation',
      'Movement and embodiment',
      'Integrating body and mind',
    ],
  },
];

export default function Workshops() {
  return (
    <div className="min-h-screen bg-tan">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Workshops
            </motion.h1>
            <motion.p
              className="text-xl text-charcoal/70 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Compassionate, evidence-based programs designed to support your healing journey
            </motion.p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/workshops/${workshop.id}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                    <div className="p-8">
                      <div className="text-5xl mb-4">{workshop.icon}</div>
                      <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-mint transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="text-charcoal/70 mb-4 leading-relaxed">
                        {workshop.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-charcoal/60">
                          <span className="mr-2">⏱</span>
                          <span>{workshop.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-charcoal/60">
                          <span className="mr-2">📅</span>
                          <span>{workshop.format}</span>
                        </div>
                        <div className="flex items-center text-sm font-semibold text-mint">
                          <span className="mr-2">💰</span>
                          <span>{workshop.price}</span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <span className="text-mint font-medium group-hover:underline">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
              What to Expect
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                All workshops are facilitated with a trauma-informed approach, prioritizing 
                safety, choice, and collaboration. Each session includes a combination of 
                education, experiential practices, and group sharing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                    <span className="text-mint mr-2">✓</span>
                    Small Group Size
                  </h3>
                  <p className="text-sm">
                    Limited to 8-12 participants to ensure personalized attention and 
                    intimacy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                    <span className="text-mint mr-2">✓</span>
                    Safe Environment
                  </h3>
                  <p className="text-sm">
                    Confidential, judgment-free space where you can explore at your own pace.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                    <span className="text-mint mr-2">✓</span>
                    Evidence-Based
                  </h3>
                  <p className="text-sm">
                    Grounded in current research on trauma, neuroscience, and healing practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3 flex items-center">
                    <span className="text-mint mr-2">✓</span>
                    Practical Tools
                  </h3>
                  <p className="text-sm">
                    Take-home practices and resources to support your ongoing journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Questions About Our Workshops?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Schedule a free consultation to discuss which workshop might be right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-white text-mint px-8 py-4 rounded-full hover:bg-tan transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-mint transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
