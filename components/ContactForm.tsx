'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    workshopInterest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          workshopInterest: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-400 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-400 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-charcoal mb-2">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-400 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="workshopInterest" className="block text-sm font-medium text-charcoal mb-2">
          Workshop Interest
        </label>
        <select
          id="workshopInterest"
          name="workshopInterest"
          value={formData.workshopInterest}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-400 focus:border-transparent"
        >
          <option value="">Select a workshop...</option>
          <option value="strong-from-the-inside-out">Strong From the Inside Out™</option>
          <option value="confident-and-unshakable">Confident & Unshakable™</option>
          <option value="sleep-for-a-stronger-you">Sleep for a Stronger You™</option>
          <option value="thriving-through-change">Thriving Through Change™</option>
          <option value="wellness-for-caregivers">Wellness for Caregivers™</option>
          <option value="not-sure">Not sure yet / General inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-400 focus:border-transparent"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-mint-50 border border-mint-400 text-mint-700 rounded-lg">
          Thank you for your message! I&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-400 text-red-700 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className={cn(status === 'loading' && 'opacity-50 cursor-not-allowed')}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
