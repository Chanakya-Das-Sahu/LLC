import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Scalable Architecture',
      description: 'Build systems that grow with your business. Our solutions are designed for scalability from day one.',
      icon: '📈',
      color: 'bg-blue-50',
      borderColor: 'border-blue-100'
    },
    {
      title: 'Modern Tech Stack',
      description: 'We use cutting-edge technologies to ensure performance, security, and maintainability.',
      icon: '⚡',
      color: 'bg-purple-50',
      borderColor: 'border-purple-100'
    },
    {
      title: 'User-Centric Design',
      description: 'Beautiful interfaces that provide exceptional user experiences across all devices.',
      icon: '🎨',
      color: 'bg-pink-50',
      borderColor: 'border-pink-100'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Leverage analytics and business intelligence to make informed decisions.',
      icon: '📊',
      color: 'bg-green-50',
      borderColor: 'border-green-100'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and applications.',
      icon: '🔒',
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-100'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to ensure your systems run smoothly.',
      icon: '🛡️',
      color: 'bg-indigo-50',
      borderColor: 'border-indigo-100'
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-sammunat-light pt-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="text-sammunat-blue">Features</span>
          </h2>
          <p className="section-subtitle">
            Discover the key features that make our solutions stand out in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl border-2 ${feature.borderColor} bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${feature.color} hover:bg-white`}
            >
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sammunat-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <button className="text-sammunat-blue font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 mb-8">
          <p className="text-gray-600 mb-8">
            Every feature is designed with your business growth in mind.
          </p>
          <button className="btn-primary">
            View All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;