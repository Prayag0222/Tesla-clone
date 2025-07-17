import React from 'react';

const Section4 = () => {
  return (
    <div className="w-full px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-7">
        
        {/* Video Section */}
        <div className="relative rounded-xl overflow-hidden w-full lg:w2/1">
          <video
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover rounded-xl"
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Homepage-FSD-Desktop.mp4"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end mb-10 px-8">
            <h1 className="text-white text-4xl lg:text-5xl font-semibold mb-6">
              Full Self-Driving (Supervised)
            </h1>
            <div className="flex flex-wrap gap-4">
              <button className="w-48 h-12 bg-sky-600 rounded-lg text-white font-medium hover:bg-sky-700 transition-colors cursor-pointer">
                Demo Drive
              </button>
              <button className="w-48 h-12 bg-white rounded-lg text-black font-medium border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative rounded-xl overflow-hidden w-full lg:w-1/2">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Worlds-First-Autonomous-Car-Delivery-Desktop.png"
            alt="World's First Autonomous Car Delivery"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end mb-10 text-start px-4">
            <h1 className="text-white text-3xl lg:text-4xl font-semibold mb-4">
              World's First Autonomous Car Delivery
            </h1>
            <button className="w-48 h-12 bg-sky-600 rounded-lg text-white font-medium hover:bg-sky-700 transition-colors cursor-pointer">
              Watch Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section4;
 