import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Proven Expertise',
      description: 'Our team brings years of experience across various industries and technologies.',
      details: ['Industry veterans', 'Cutting-edge skills', 'Continuous learning']
    },
    {
      number: '02',
      title: 'Quality Delivery',
      description: 'We maintain the highest standards in every project we undertake.',
      details: ['Best practices', 'Code reviews', 'Quality assurance']
    },
    {
      number: '03',
      title: 'Innovation Focus',
      description: 'We stay ahead of trends to deliver forward-thinking solutions.',
      details: ['Tech research', 'Innovation labs', 'Future-proofing']
    },
    {
      number: '04',
      title: 'Client Partnership',
      description: 'We work as an extension of your team, not just a service provider.',
      details: ['Transparent communication', 'Regular updates', 'Collaborative approach']
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-left">
              Why Choose
              <span className="text-sammunat-blue block">Sammunat?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We go beyond just delivering projects. We build partnerships and create solutions that drive real business value.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div 
                  key={reason.number}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                >
                  <div className="text-4xl font-bold text-gray-200 group-hover:text-sammunat-blue/20 transition-colors duration-300">
                    {reason.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sammunat-blue transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {reason.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {reason.details.map((detail, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-sammunat-blue rounded-full text-sm"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-sammunat-blue to-blue-600 rounded-3xl p-8 text-white">
                <div className="mb-8">
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-blue-100">Client Retention Rate</div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Project Success</span>
                      <span>98%</span>
                    </div>
                    <div className="h-2 bg-blue-300 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-11/12"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>On-time Delivery</span>
                      <span>96%</span>
                    </div>
                    <div className="h-2 bg-blue-300 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-10/12"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Client Satisfaction</span>
                      <span>99%</span>
                    </div>
                    <div className="h-2 bg-blue-300 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">👥</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold">Join 200+ Successful Companies</div>
                      <div className="text-blue-100">That trust us with their digital transformation</div>
                    </div>
                  </div>
                  <button className="w-full bg-white text-sammunat-blue font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 mt-4">
                    Become Our Partner
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;