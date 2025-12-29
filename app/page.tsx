'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const workshops = [
  {
    title: 'Healing from Trauma',
    description: 'Discover tools and practices for processing and healing from traumatic experiences in a safe, supportive environment.',
    duration: '8 weeks',
    image: '🌱',
  },
  {
    title: 'Building Resilience',
    description: 'Strengthen your inner resources and develop practical strategies for navigating life\'s challenges with grace.',
    duration: '6 weeks',
    image: '🌟',
  },
  {
    title: 'Mindful Self-Compassion',
    description: 'Learn to treat yourself with kindness and understanding through evidence-based mindfulness practices.',
    duration: '4 weeks',
    image: '💚',
  },
  {
    title: 'Emotional Regulation',
    description: 'Develop skills to understand, manage, and work with difficult emotions in healthy ways.',
    duration: '6 weeks',
    image: '🌊',
  },
  {
    title: 'Somatic Healing',
    description: 'Connect with your body\'s wisdom and release stored trauma through gentle, body-based practices.',
    duration: '8 weeks',
    image: '🌸',
  },
];

const testimonials = [
  {
    quote: 'Susan created a space where I finally felt safe enough to begin healing. Her compassionate approach changed my life.',
    author: 'Maria T.',
    role: 'Workshop Participant',
  },
  {
    quote: 'The tools I learned have been transformative. I now have practical ways to care for myself during difficult moments.',
    author: 'James K.',
    role: 'Building Resilience Graduate',
  },
  {
    quote: 'Susan\'s deep understanding of trauma and her gentle guidance made all the difference in my healing journey.',
    author: 'Sarah L.',
    role: 'Healing from Trauma Graduate',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-tan">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Healing Begins Here
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-charcoal/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trauma-informed workshops designed to create safe spaces for growth, 
              healing, and transformation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/workshops"
                className="bg-mint text-white px-8 py-4 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-lg"
              >
                Explore Workshops
              </Link>
              <Link
                href="/about"
                className="bg-white text-charcoal px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Workshops
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Compassionate, evidence-based programs to support your healing journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                className="bg-tan p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{workshop.image}</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                  {workshop.title}
                </h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <p className="text-mint font-semibold">{workshop.duration}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/workshops"
              className="inline-block bg-charcoal text-tan px-8 py-4 rounded-full hover:bg-charcoal/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              View All Workshops
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-mint/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                  About Susan
                </h2>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  With over a decade of experience in trauma-informed facilitation, 
                  I'm dedicated to creating safe, compassionate spaces where healing 
                  can unfold naturally.
                </p>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                  My approach combines evidence-based practices with deep respect for 
                  each person's unique journey, honoring the wisdom of both mind and body.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-mint text-white px-8 py-3 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-md"
                >
                  Read My Story
                </Link>
              </motion.div>
              <motion.div
                className="bg-mint/20 rounded-lg p-8 lg:p-12"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Credentials & Training
                </h3>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>Certified Trauma-Informed Facilitator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>Master's in Clinical Psychology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>Somatic Experiencing Practitioner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>MBSR (Mindfulness-Based Stress Reduction)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span>
                    <span>15+ years of facilitation experience</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              What People Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Stories from those who have walked the path of healing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-tan p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-charcoal/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.author}</p>
                  <p className="text-charcoal/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/testimonials"
              className="inline-block bg-charcoal text-tan px-8 py-4 rounded-full hover:bg-charcoal/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              More Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mint text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Take the first step toward healing. Book a consultation to learn more 
              about how these workshops can support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-white text-mint px-8 py-4 rounded-full hover:bg-tan transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-lg"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-mint-600 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-mint transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
