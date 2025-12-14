import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-sammunat-light to-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-sammunat-blue text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-sammunat-blue rounded-full mr-2"></span>
              Innovating Tomorrow, Today
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building Scalable
              <span className="text-sammunat-blue block">Digital Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Sammunat transforms businesses with cutting-edge technology and innovative digital solutions. We help startups and enterprises scale efficiently in the digital era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                Start Your Journey
                <span className="ml-2">→</span>
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Graphic */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-br from-sammunat-blue to-blue-400 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex space-x-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg">
                        <div className="h-2 bg-blue-100 rounded mb-2"></div>
                        <div className="h-2 bg-blue-100 rounded w-2/3"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-sammunat-blue rounded-full"></div>
                      <div>
                        <div className="h-2 w-16 bg-blue-100 rounded"></div>
                        <div className="h-2 w-12 bg-blue-100 rounded mt-1"></div>
                      </div>
                    </div>
                    <div className="text-sammunat-blue font-bold">Active</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;