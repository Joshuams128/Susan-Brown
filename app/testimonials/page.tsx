'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote: 'Susan created a space where I finally felt safe enough to begin healing. Her compassionate approach changed my life. The tools I learned continue to support me every day.',
    author: 'Maria T.',
    role: 'Healing from Trauma Graduate',
    workshop: 'Healing from Trauma',
  },
  {
    quote: 'The tools I learned have been transformative. I now have practical ways to care for myself during difficult moments. Susan\'s guidance helped me develop real resilience.',
    author: 'James K.',
    role: 'Building Resilience Graduate',
    workshop: 'Building Resilience',
  },
  {
    quote: 'Susan\'s deep understanding of trauma and her gentle guidance made all the difference in my healing journey. I finally feel connected to my body in a positive way.',
    author: 'Sarah L.',
    role: 'Somatic Healing Graduate',
    workshop: 'Somatic Healing',
  },
  {
    quote: 'I was skeptical at first, but the mindful self-compassion practices have genuinely changed how I relate to myself. I\'m kinder, more patient, and less critical.',
    author: 'David M.',
    role: 'Mindful Self-Compassion Graduate',
    workshop: 'Mindful Self-Compassion',
  },
  {
    quote: 'Learning to regulate my emotions has been life-changing. I no longer feel at the mercy of my feelings. Susan taught me that emotions can be messengers, not enemies.',
    author: 'Jennifer R.',
    role: 'Emotional Regulation Graduate',
    workshop: 'Emotional Regulation',
  },
  {
    quote: 'The small group setting allowed for deep connection and vulnerability. I felt seen and supported throughout the entire process. This workshop gave me my life back.',
    author: 'Michael P.',
    role: 'Healing from Trauma Graduate',
    workshop: 'Healing from Trauma',
  },
  {
    quote: 'Susan holds space with such grace and wisdom. Her presence alone is healing. The somatic practices she taught continue to help me release old pain.',
    author: 'Linda K.',
    role: 'Somatic Healing Graduate',
    workshop: 'Somatic Healing',
  },
  {
    quote: 'I came to this workshop feeling broken. I left knowing that I was never broken to begin with—just hurting and in need of compassion. Thank you, Susan.',
    author: 'Robert H.',
    role: 'Building Resilience Graduate',
    workshop: 'Building Resilience',
  },
  {
    quote: 'The self-compassion practices Susan taught have rippled into every area of my life. I\'m a better parent, partner, and friend because I\'m finally kind to myself.',
    author: 'Amanda S.',
    role: 'Mindful Self-Compassion Graduate',
    workshop: 'Mindful Self-Compassion',
  },
  {
    quote: 'I\'ve done therapy for years, but this workshop gave me something different—practical tools I can use in the moment. Susan\'s teaching is both wise and accessible.',
    author: 'Thomas B.',
    role: 'Emotional Regulation Graduate',
    workshop: 'Emotional Regulation',
  },
  {
    quote: 'The combination of education, practice, and community support created the perfect environment for healing. I felt empowered and hopeful for the first time in years.',
    author: 'Patricia W.',
    role: 'Building Resilience Graduate',
    workshop: 'Building Resilience',
  },
  {
    quote: 'Susan\'s trauma-informed approach meant I never felt pushed beyond what I was ready for. She honored my pace and my process. That safety allowed me to do deep work.',
    author: 'Christopher J.',
    role: 'Healing from Trauma Graduate',
    workshop: 'Healing from Trauma',
  },
];

export default function Testimonials() {
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
              Testimonials
            </motion.h1>
            <motion.p
              className="text-xl text-charcoal/70 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stories of healing, growth, and transformation from workshop participants
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-mint/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-charcoal/80 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-charcoal/10 pt-4">
                    <p className="font-semibold text-charcoal text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-charcoal/60 text-sm mt-1">
                      {testimonial.role}
                    </p>
                    <p className="text-mint text-sm mt-1 font-medium">
                      {testimonial.workshop}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
                Impact by the Numbers
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-serif font-bold text-mint mb-2">
                  1000+
                </div>
                <p className="text-charcoal/70 text-lg">
                  Individuals Supported
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-serif font-bold text-mint mb-2">
                  15+
                </div>
                <p className="text-charcoal/70 text-lg">
                  Years of Experience
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-serif font-bold text-mint mb-2">
                  98%
                </div>
                <p className="text-charcoal/70 text-lg">
                  Would Recommend
                </p>
              </motion.div>
            </div>
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
              Start Your Own Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join the many others who have found healing and transformation through 
              these workshops. Your story of growth is waiting to be written.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/workshops"
                className="bg-white text-mint px-8 py-4 rounded-full hover:bg-tan transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Explore Workshops
              </Link>
              <Link
                href="/book"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-mint transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
