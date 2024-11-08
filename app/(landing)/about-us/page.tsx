import LandingNav from '@/components/LandingNav';
import React from 'react';

const page = () => {
  return (
    <>

    <LandingNav/>
  <section className="bg-[#E66B2D] text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-8">
        Discover who we are and what drives us to deliver the best banking solutions for you.
      </p>
    </div>
  </section>
  

  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-[#E66B2D] mb-12">Our Mission</h2>
      <div className="text-center">
        <p className="text-gray-600">
          At BrightPath, our mission is to provide innovative financial solutions that empower individuals and businesses to thrive. We are committed to delivering exceptional service with integrity and transparency.
        </p>
      </div>
    </div>
  </section>


  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-[#E66B2D] mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <svg className="h-12 w-12 mx-auto mb-4 text-[#E66B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2 4 4 8-8 4 4-12 12L3 12z"/>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
          <p className="text-gray-600">We put our customers at the center of everything we do, striving to meet their needs and exceed their expectations.</p>
        </div>


                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <svg className="h-12 w-12 mx-auto mb-4 text-[#E66B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2 4-2V6l-4-2-4 2z"/>
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-600">We embrace innovation to offer cutting-edge financial solutions that adapt to the evolving needs of our clients.</p>
                  </div>
            

                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <svg className="h-12 w-12 mx-auto mb-4 text-[#E66B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5 10-10"/>
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                    <p className="text-gray-600">We conduct our business with the highest standards of integrity and transparency, building trust with our customers and partners.</p>
                  </div>
                </div>
              </div>
            </section>
          

            <section className="py-16 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-[#E66B2D] mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">

                    <h3 className="text-xl font-semibold mb-2">Shreya Kale</h3>
                    <p className="text-gray-600">K078</p>
                    <p className="mt-2">Shreya is the visionary behind BrightPath, committed to driving growth and innovation in the financial industry.</p>
                  </div>
          

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">

                    <h3 className="text-xl font-semibold mb-2">Neel Shah</h3>
                    <p className="text-gray-600">K047</p>
                    <p className="mt-2">Neel leads our technology initiatives, ensuring we stay at the forefront of financial technology advancements.</p>
                  </div>
          

                  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">

                    <h3 className="text-xl font-semibold mb-2">Sia Tata</h3>
                    <p className="text-gray-600">K060</p>
                    <p className="mt-2">Sia and her team are dedicated to providing exceptional service and support to our valued customers.</p>
                  </div>
                </div>
              </div>
            </section>
          

            <footer className="bg-logo-orange text-white py-6">
              <div className="container mx-auto px-6 text-center">
                <p className="mb-4">&copy; 2024 BrightPath. All rights reserved.</p>
                <ul className="flex justify-center space-x-6 rtl:space-x-reverse">
                  <li><a href="privacy_policy.html" className="hover:text-amber-950">Privacy Policy</a></li>
                  <li><a href="terms_of_service.html" className="hover:text-amber-950">Terms of Service</a></li>
                  <li><a href="contact_us.html" className="hover:text-amber-950">Contact Us</a></li>
                </ul>
              </div>
            </footer>
            </>
  )
}

export default page;