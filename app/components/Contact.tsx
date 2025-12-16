'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  // Replace 'YOUR_PROJECT_ID' with your actual Formspree Project ID
  const [state, handleSubmit] = useForm("YOUR_PROJECT_ID");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-[var(--color-secondary)]/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[var(--color-background)] rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-900/5 border border-[var(--color-muted)] text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-foreground)]">Message Sent! 🚀</h2>
            <p className="text-[var(--color-muted-foreground)]">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[var(--color-secondary)]/30">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="bg-[var(--color-background)] rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-900/5 border border-[var(--color-muted)] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to start a project?
            </h2>
            <p className="text-[var(--color-muted-foreground)] text-lg mb-10 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-secondary)] border-transparent focus:border-[var(--color-primary)] focus:bg-[var(--color-background)] focus:ring-0 transition-all outline-none"
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">Email</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-secondary)] border-transparent focus:border-[var(--color-primary)] focus:bg-[var(--color-background)] focus:ring-0 transition-all outline-none"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-foreground)]">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-secondary)] border-transparent focus:border-[var(--color-primary)] focus:bg-[var(--color-background)] focus:ring-0 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
