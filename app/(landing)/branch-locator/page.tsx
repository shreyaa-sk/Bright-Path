import React from 'react';
import LandingFooter from '@/components/LandingFooter';
import LandingNav from '@/components/LandingNav';

const BranchLocator = () => {
  return (
    <>
      <LandingNav />

      <div className="flex flex-col justify-start items-center w-full min-h-screen p-4 bg-gradient-to-r from-[#E66B2d] via-[#e66f34] to-[#deb6a3]">
        <h1 className="text-5xl text-white font-bold mb-8 mt-8">Our Banks Locations</h1>

        {/* Container for the iframe with responsive height control */}
        <div className="w-full max-w-5xl h-[calc(100vh-16rem)] bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://my.atlist.com/map/14f7294a-b101-4429-a1b9-aea3b9d87123?share=true" 
            allow="geolocation 'self' https://my.atlist.com" 
            className="w-full h-full"
            loading="lazy" 
            frameBorder="0" 
            scrolling="no" 
            allowFullScreen 
            id="atlist-embed">
          </iframe>
        </div>
      </div>

      <LandingFooter />
    </>
  );
};

export default BranchLocator;
