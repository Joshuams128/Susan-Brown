'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Book() {
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
              Book a Consultation
            </motion.h1>
            <motion.p
              className="text-xl text-charcoal/70 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Schedule a free 20-minute consultation to discuss which workshop might be 
              right for you and answer any questions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                What to Expect from Your Consultation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Personalized Discussion
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      We'll talk about your goals and what you're hoping to gain from a workshop.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Workshop Recommendations
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      I'll help you identify which workshop(s) might be the best fit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Questions Answered
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      Ask anything about my approach, the workshops, or what to expect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-mint text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      No Pressure
                    </h3>
                    <p className="text-charcoal/70 text-sm">
                      Take all the time you need to decide—there's no obligation to register.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Calendly Embed Placeholder */}
              <div className="aspect-[4/3] bg-tan/30 flex items-center justify-center p-8">
                <div className="text-center max-w-2xl">
                  <div className="text-6xl mb-6">📅</div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                    Calendly Integration
                  </h3>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">
                    To integrate Calendly, add your Calendly embed code here. The scheduling 
                    widget will appear in this space, allowing visitors to book consultations 
                    directly.
                  </p>
                  <div className="bg-white p-6 rounded-lg border border-charcoal/20 text-left">
                    <p className="font-mono text-sm text-charcoal/60 mb-2">
                      Example Calendly embed:
                    </p>
                    <code className="text-xs text-charcoal/70 block overflow-x-auto">
                      {`<div className="calendly-inline-widget" 
  data-url="https://calendly.com/your-username/consultation"
  style={{ minWidth: '320px', height: '700px' }}></div>`}
                    </code>
                  </div>
                  <p className="text-sm text-charcoal/60 mt-4">
                    For now, you can use the contact form to reach out, or visit{' '}
                    <a 
                      href="https://calendly.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-mint hover:underline"
                    >
                      Calendly.com
                    </a>
                    {' '}to set up your scheduling page.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-mint/10 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4 text-center">
                Prefer Another Way to Connect?
              </h2>
              <p className="text-center text-charcoal/70 mb-8">
                No problem! You can also reach out via email or phone.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg text-center">
                  <span className="text-4xl mb-3 block">📧</span>
                  <h3 className="font-semibold text-charcoal mb-2">Email</h3>
                  <a 
                    href="mailto:susan@susanbrown.com" 
                    className="text-mint hover:underline"
                  >
                    susan@susanbrown.com
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg text-center">
                  <span className="text-4xl mb-3 block">📞</span>
                  <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
                  <a 
                    href="tel:+15555551234" 
                    className="text-mint hover:underline"
                  >
                    (555) 555-1234
                  </a>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-mint text-white px-8 py-3 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-md"
                >
                  Or Use Contact Form
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
                Not Sure Which Workshop to Choose?
              </h2>
              <p className="text-center text-charcoal/70 mb-8">
                Browse our workshop offerings to learn more about each program.
              </p>
              <div className="text-center">
                <Link
                  href="/workshops"
                  className="inline-block bg-charcoal text-tan px-8 py-3 rounded-full hover:bg-charcoal/90 transition-all duration-300 font-medium shadow-md"
                >
                  Explore Workshops
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
