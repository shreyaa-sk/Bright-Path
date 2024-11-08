import React from 'react';
import LandingFooter from '@/components/LandingFooter';
import LandingNav from '@/components/LandingNav';

const BranchLocator = () => {
  return (
    <>
      <LandingNav />

      <div className="flex flex-col justify-normal items-center w-full min-h-screen p-4 bg-orange-100">
        <h1 className="text-5xl text-[#e66b2d] font-bold mb-12 mt-12">Our Bank's Locations</h1>

        <div className="w-full max-w-5xl min-h-dvh bg-white rounded-lg shadow-lg overflow-hidden">
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
