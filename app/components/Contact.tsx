'use client';

import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  // Replace 'YOUR_PROJECT_ID' with your actual Formspree Project ID
  const [state, handleSubmit] = useForm("mdkqrole");

  return (
    <section id="contact" className="py-32 px-6 md:px-24 border-t border-white/10 mb-20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <span className="font-mono text-4xl md:text-6xl text-gray-800">04</span>
        </div>

        <div className="md:w-3/4">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-16 tracking-tight">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
                From management to electrics | from pixels to lumens. This is what we love to do.
              </p>
              <a 
                href="mailto:ahmed@example.com" 
                className="text-2xl md:text-4xl font-bold underline decoration-1 underline-offset-8 hover:text-gray-400 transition-colors"
              >
                ahmed@example.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {state.succeeded && (
                <div className="p-4 border border-green-500 text-green-500 font-mono text-sm uppercase">
                  Message Sent Successfully
                </div>
              )}
              
              <div className="group">
                <label htmlFor="name" className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors"
                  placeholder="ENTER YOUR NAME"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">Email</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors"
                  placeholder="ENTER YOUR EMAIL"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div className="group">
                <label htmlFor="message" className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="YOUR MESSAGE..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50"
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
