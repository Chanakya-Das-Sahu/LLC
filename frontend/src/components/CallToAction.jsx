import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className=" -mx-6 mt-5 section-padding bg-gradient-to-r from-sammunat-blue to-blue-600">
      <div className="container-custom py-10 ">
        <div className="text-center text-white max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Ready to Transform?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Start Your Digital Journey
            <span className="block text-blue-100">With Sammunat Today</span>
          </h2>
          
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of businesses that have transformed their operations with our cutting-edge solutions. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-sammunat-blue px-8 py-4 rounded-lg font-bold text-lg hover:border-2    transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
              <span className="ml-2">🚀</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
              Schedule a Demo
              <span className="ml-2">📅</span>
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold">30-Day</div>
              <div className="text-blue-100">Trial Period</div>
            </div>
            <div>
              <div className="text-2xl font-bold">No Credit Card</div>
              <div className="text-blue-100">Required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;