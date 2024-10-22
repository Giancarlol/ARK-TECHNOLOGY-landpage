import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 leading-tight">Get in Touch</h2>
          <h3 className="text-2xl font-light mb-8 tracking-wide">LET'S TRANSFORM YOUR IDEAS INTO REALITY</h3>
          <p className="text-xl mb-12 text-gray-400">Ready to start your digital journey? Let's discuss how ARK TECHNOLOGY can help you innovate, scale, and digitalize your business.</p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex items-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 text-lg">
                Send Message
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;