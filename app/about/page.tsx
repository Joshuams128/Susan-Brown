'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
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
              About Susan
            </motion.h1>
            <motion.p
              className="text-xl text-charcoal/70 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creating compassionate spaces for healing and transformation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                My Journey
              </h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  My path to becoming a trauma-informed facilitator began with my own 
                  healing journey. After experiencing the profound impact of compassionate, 
                  body-aware practices in my own life, I knew I wanted to create spaces 
                  where others could experience this same transformative healing.
                </p>
                <p>
                  For over 15 years, I've dedicated myself to understanding the intricate 
                  ways trauma affects our minds, bodies, and spirits. I've studied with 
                  leading experts in somatic psychology, mindfulness, and trauma recovery, 
                  always seeking to deepen my capacity to serve those on their healing paths.
                </p>
                <p>
                  What drives me is witnessing the resilience of the human spirit. Time and 
                  again, I've seen individuals courageously face their pain, reclaim their 
                  stories, and discover an inner strength they didn't know they possessed. 
                  It's an honor to walk alongside people during these sacred moments of growth.
                </p>
                <p>
                  My approach is rooted in the belief that healing is not about "fixing" 
                  ourselves, but about creating the conditions for our innate wholeness to 
                  emerge. Every person carries within them the capacity for healing—sometimes 
                  they just need a safe space and gentle guidance to access it.
                </p>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              className="bg-mint/10 rounded-lg p-8 md:p-12 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                My Philosophy
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">•</span>
                  <p className="text-lg text-charcoal/80">
                    <strong className="text-charcoal">Safety First:</strong> Creating environments 
                    where participants feel physically and emotionally safe is foundational to all healing work.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">•</span>
                  <p className="text-lg text-charcoal/80">
                    <strong className="text-charcoal">Body Wisdom:</strong> Our bodies hold profound 
                    wisdom. By learning to listen to and trust our somatic experiences, we access 
                    powerful pathways to healing.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">•</span>
                  <p className="text-lg text-charcoal/80">
                    <strong className="text-charcoal">Compassionate Presence:</strong> Healing happens 
                    in relationship. I bring my full, authentic presence to each workshop, modeling 
                    the self-compassion I hope participants will discover.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">•</span>
                  <p className="text-lg text-charcoal/80">
                    <strong className="text-charcoal">Individual Pace:</strong> Everyone's healing 
                    journey is unique. I honor each person's timeline and readiness, never pushing 
                    beyond what feels safe.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8 text-center">
                Credentials & Training
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Education</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Master's in Clinical Psychology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Bachelor's in Psychology, Minor in Neuroscience</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Certifications</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Certified Trauma-Informed Facilitator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Somatic Experiencing Practitioner (SEP)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>MBSR Teacher Certification</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Specialized Training</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Internal Family Systems (IFS) Level 1 & 2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Polyvagal Theory Clinical Applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Mindful Self-Compassion (MSC)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Experience</h3>
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>15+ years facilitating trauma healing workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>1000+ individuals supported</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-mint mr-2">•</span>
                      <span>Ongoing supervision and professional development</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-mint/10 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Continuing Education
                </h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  I'm committed to ongoing learning and regularly participate in advanced training, 
                  supervision, and consultation. The field of trauma recovery is constantly evolving, 
                  and I believe staying current with research and best practices is essential to 
                  serving my participants well.
                </p>
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
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              I'd be honored to support you. Book a consultation to learn more 
              about my workshops and approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-white text-mint px-8 py-4 rounded-full hover:bg-tan transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Book a Consultation
              </Link>
              <Link
                href="/workshops"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-mint transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                View Workshops
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
