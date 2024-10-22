import React from 'react';
import { Code, Cpu, BarChart, Globe, Lightbulb, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Custom Software Development',
      description: "We create tailored web and mobile applications that address your unique business challenges and opportunities."
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI & Algorithm Implementation',
      description: "Our team develops and integrates AI solutions and advanced algorithms to optimize your business processes."
    },
    {
      icon: <BarChart size={24} />,
      title: 'Process Scaling & Optimization',
      description: "We design and implement scalable, resilient systems that grow with your business and maintain peak performance."
    },
    {
      icon: <Globe size={24} />,
      title: 'Digital Transformation',
      description: "We guide and support your business through comprehensive digitalization, enhancing efficiency and competitiveness."
    },
    {
      icon: <Cloud size={24} />,
      title: 'SaaS Solutions',
      description: "Develop cloud-based software solutions that can be easily implemented across various businesses and industries."
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Idea to Product Realization',
      description: "We transform your innovative ideas into market-ready products, handling everything from concept to launch."
    }
  ];

  return (
    <section id="services" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="border-t border-gray-700 pt-8">
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;