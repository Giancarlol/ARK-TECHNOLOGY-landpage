import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light mb-6 tracking-wide">TRANSFORMING IDEAS INTO DIGITAL SOLUTIONS</h2>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-none tracking-tight">
            Innovate, Scale,<br />
            and Digitalize
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl">
            ARK TECHNOLOGY specializes in creating cutting-edge web and mobile applications, 
            implementing AI-driven solutions, and helping businesses digitalize their processes 
            for maximum efficiency and scalability.
          </p>
          <div className="mb-16">
            <a href="#contact" className="inline-flex items-center bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl text-lg">
              Start Your Digital Journey
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient-animated">ARK TECHNOLOGY</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;