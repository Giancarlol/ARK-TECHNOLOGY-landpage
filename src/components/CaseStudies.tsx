import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ClientExperiencesSlider from './ClientExperiencesSlider';
import RotatingMessage from './RotatingMessage';

const features = [
  "AI-powered process optimization",
  "Scalable and resilient digital solutions",
  "Custom SaaS implementations",
  "End-to-end digital transformation"
];

const CaseStudies = () => {
  return (
    <>
      <section id="case-studies" className="py-32 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold mb-8 leading-tight text-black">
                Revolutionize<br />Your Business
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
                Experience the power of ARK TECHNOLOGY's innovative solutions. We help businesses of all sizes 
                leverage cutting-edge technology to streamline operations, boost efficiency, and stay ahead in 
                the digital landscape.
              </p>
              <a href="#contact" className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Start your transformation
                <ArrowRight size={20} className="ml-2" />
              </a>
              <div className="mt-16">
                <RotatingMessage textColor="text-black" />
                <ul className="space-y-4 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-sm">
                      <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                    alt="ARK TECHNOLOGY Demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full p-4 shadow-lg">
                      <Play size={32} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Interactive Solution Demo</h3>
                  <p className="text-gray-600 text-sm">Watch how our solutions can transform your business processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientExperiencesSlider />
    </>
  );
};

export default CaseStudies;