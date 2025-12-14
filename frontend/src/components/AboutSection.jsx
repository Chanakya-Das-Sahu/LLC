import React from 'react';

const AboutSection = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly explore new technologies and methodologies to stay ahead of the curve.',
      icon: '🚀'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We work collaboratively to achieve your business goals.',
      icon: '💼'
    },
    {
      title: 'Quality Focus',
      description: 'We deliver excellence in every project with attention to detail and best practices.',
      icon: '⭐'
    },
    {
      title: 'Agile Approach',
      description: 'Flexible methodologies ensure we adapt quickly to changing requirements and markets.',
      icon: '🔄'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-sammunat-blue">Sammunat</span>
          </h2>
          <p className="section-subtitle">
            We're a modern technology company focused on creating scalable digital solutions that drive business growth and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-gray-600 mb-6">
              At Sammunat, we believe in the power of technology to transform businesses. Our team of experts combines technical expertise with creative thinking to deliver solutions that matter.
            </p>
            <p className="text-gray-600 mb-8">
              From startups to enterprises, we provide tailored digital solutions that scale with your business, ensuring you stay competitive in today's fast-paced digital landscape.
            </p>
            <button className="btn-primary">
              Explore Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Web Development', color: 'bg-blue-50' },
              { title: 'Mobile Apps', color: 'bg-indigo-50' },
              { title: 'Cloud Solutions', color: 'bg-purple-50' },
              { title: 'AI & ML', color: 'bg-pink-50' }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`${service.color} p-6 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="text-3xl mb-4">✨</div>
                <h4 className="font-semibold text-gray-900">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-sammunat-blue/20"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;