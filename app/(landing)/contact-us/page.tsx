import LandingFooter from '@/components/LandingFooter';
import LandingNav from '@/components/LandingNav';
import React from 'react';

const page = () => {
  return (
    <>
      <LandingNav />

      {/* Main Contact Us section */}
      <section className="bg-logo-orange text-logo-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 lg:mb-6">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Were here to assist you. Please feel free to reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Get In Touch Form section */}
      <section className="bg-white mb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-logo-orange mb-8">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="bg-logo-white p-6 lg:p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-logo-orange font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-logo-orange rounded focus:outline-none focus:ring-2 focus:ring-logo-orange"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-logo-orange font-semibold">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-logo-orange rounded focus:outline-none focus:ring-2 focus:ring-logo-orange"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-logo-orange font-semibold">Your Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-logo-orange rounded focus:outline-none focus:ring-2 focus:ring-logo-orange"
                  rows={5}
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-logo-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-logo-brown transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information section */}
      <section className="py-6 lg:py-10 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-logo-orange mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 gap-y-10">

            {/* Email Section */}
            <div className="text-center">
              <div className="bg-logo-orange text-[#E66b2d] p-6 rounded-full inline-block">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 10V8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">support@brightpath.com</p>
            </div>

            {/* Call Section */}
            <div className="text-center">
              <div className="bg-logo-orange text-[#E66b2d] p-6 rounded-full inline-block mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4m-6 4H5a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>

            {/* Visit Section */}
            <div className="text-center">
              <div className="bg-logo-orange text-[#E66b2d] p-6 rounded-full inline-block mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V13a2 2 0 012-2h2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 BrightPath St, Suite 100<br />City, Country 12345</p>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </>
  );
};

export default page;
