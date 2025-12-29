'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

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
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-charcoal/70 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Have questions about workshops? Ready to begin your healing journey? 
              I'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                    Send a Message
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="bg-mint/10 border border-mint text-charcoal p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Thank you!</h3>
                      <p>Your message has been received. I'll get back to you within 24-48 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-charcoal font-medium mb-2">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 transition-all"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-charcoal font-medium mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="workshop-inquiry">Workshop Inquiry</option>
                          <option value="registration">Workshop Registration</option>
                          <option value="consultation">Book a Consultation</option>
                          <option value="general">General Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 transition-all resize-none"
                          placeholder="Tell me a bit about what you're looking for..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-mint text-white px-8 py-4 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div className="bg-mint/10 rounded-lg p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-mint text-2xl mr-4">📧</span>
                        <div>
                          <p className="font-semibold text-charcoal">Email</p>
                          <a 
                            href="mailto:susan@susanbrown.com" 
                            className="text-charcoal/70 hover:text-mint transition-colors"
                          >
                            susan@susanbrown.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-mint text-2xl mr-4">📞</span>
                        <div>
                          <p className="font-semibold text-charcoal">Phone</p>
                          <a 
                            href="tel:+15555551234" 
                            className="text-charcoal/70 hover:text-mint transition-colors"
                          >
                            (555) 555-1234
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-mint text-2xl mr-4">⏰</span>
                        <div>
                          <p className="font-semibold text-charcoal">Response Time</p>
                          <p className="text-charcoal/70">
                            Within 24-48 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                      Prefer to Book Directly?
                    </h3>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">
                      Schedule a free 20-minute consultation to discuss which workshop 
                      might be right for you, or to ask any questions you have about 
                      my approach.
                    </p>
                    <Link
                      href="/book"
                      className="inline-block bg-mint text-white px-8 py-3 rounded-full hover:bg-mint/90 transition-all duration-300 font-medium shadow-md"
                    >
                      Book a Consultation
                    </Link>
                  </div>

                  <div className="bg-tan rounded-lg p-8 border border-charcoal/10">
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-3 text-charcoal/80">
                      <li className="flex items-start">
                        <span className="text-mint mr-2">•</span>
                        <span>I personally respond to all inquiries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint mr-2">•</span>
                        <span>All conversations are confidential</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint mr-2">•</span>
                        <span>No pressure—take your time deciding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mint mr-2">•</span>
                        <span>Ask any questions you have</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2 text-lg">
                    How do I know which workshop is right for me?
                  </h3>
                  <p className="text-charcoal/70">
                    I offer free 20-minute consultations to help you determine which workshop 
                    would best meet your needs. We can discuss your goals and any questions you have.
                  </p>
                </div>

                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2 text-lg">
                    Are the workshops held in-person or online?
                  </h3>
                  <p className="text-charcoal/70">
                    I offer both in-person and online options to accommodate different preferences 
                    and locations. Please inquire about current offerings.
                  </p>
                </div>

                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2 text-lg">
                    What if I need to miss a session?
                  </h3>
                  <p className="text-charcoal/70">
                    I understand that life happens. Recordings are available for online sessions, 
                    and I provide session summaries for in-person workshops you're unable to attend.
                  </p>
                </div>

                <div className="bg-tan p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2 text-lg">
                    Do you offer sliding scale or payment plans?
                  </h3>
                  <p className="text-charcoal/70">
                    Yes, I believe healing should be accessible. I offer a limited number of sliding 
                    scale spots and payment plans. Please reach out to discuss options.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
