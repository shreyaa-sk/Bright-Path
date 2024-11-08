'use client';

import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

import LandingNav from '/Users/shreyakale/GitHub/mainFolder/bp-banking/components/LandingNav';
import Hero from '/Users/shreyakale/GitHub/mainFolder/bp-banking/components/Hero';
import LandingFooter from '/Users/shreyakale/GitHub/mainFolder/bp-banking/components/LandingFooter';
import ClientsCarousel from '/Users/shreyakale/GitHub/mainFolder/bp-banking/components/ClientsCarousel'; // Import ClientsCarousel
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <div className="h-16">
        <LandingNav />
      </div>

      {/* Hero Section */}
      <div className="flex-1 bg-[#E66B2D] text-white">
        <Hero />
      </div>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-16 bg-gray-50 flex items-center">
        <div className="container mx-auto px-6">
          <Fade cascade>
            <h2 className="text-4xl font-bold text-center text-[#E66B2D] mb-12">
              Explore Our Top-Rated Services
            </h2>
          </Fade>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Cards */}
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#E66B2D] mb-4">Account Management</h3>
              <p className="text-gray-700 mb-4">Manage your finances, track your spending, and set up savings goals effortlessly with BrightPath’s intuitive tools.</p>
              <a href="account_management.html" className="text-[#E66B2D] underline hover:text-[#D45B23]">Learn more</a>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#E66B2D] mb-4">Loan Services</h3>
              <p className="text-gray-700 mb-4">Apply for personal, home, or auto loans with competitive rates and flexible repayment options that suit your needs.</p>
              <a href="loan_services.html" className="text-[#E66B2D] underline hover:text-[#D45B23]">Learn more</a>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#E66B2D] mb-4">Credit Cards</h3>
              <p className="text-gray-700 mb-4">Earn cashback, rewards, and exclusive perks with our flexible credit cards designed for all your spending needs.</p>
              <a href="credit_cards.html" className="text-[#E66B2D] underline hover:text-[#D45B23]">Learn more</a>
            </div>
            {/* Additional Service Cards */}
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#E66B2D] mb-4">Investment Services</h3>
              <p className="text-gray-700 mb-4">Invest in your future with our expert advisory services and tailor your portfolio to meet your financial goals.</p>
              <a href="investment_services.html" className="text-[#E66B2D] underline hover:text-[#D45B23]">Learn more</a>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#E66B2D] mb-4">Mobile Banking</h3>
              <p className="text-gray-700 mb-4">Manage all your accounts with ease from your phone, with secure, quick, and on-the-go access to your financial data.</p>
              <a href="mobile_banking.html" className="text-[#E66B2D] underline hover:text-[#D45B23]">Learn more</a>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-[#E66B2D] mb-4">Wealth Management</h3>
              <p className="text-gray-700 mb-4">Grow and protect your wealth with personalized financial planning and investment management strategies.</p>
              <a href="wealth_management.html" className="text-[#E66B2D] underline hover:text-[#D45B23]">Learn more</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section id="stats" className="bg-[#E66B2D] text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Stats Cards */}
            <div className="bg-white text-center p-6 rounded-lg shadow-xl hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#E66B2D] mb-4">10M+</h3>
              <p className="text-lg font-medium text-gray-700">Customers Trust Us</p>
            </div>
            <div className="bg-white text-center p-6 rounded-lg shadow-xl hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#E66B2D] mb-4">$25B+</h3>
              <p className="text-lg font-medium text-gray-700">Loans Disbursed</p>
            </div>
            <div className="bg-white text-center p-6 rounded-lg shadow-xl hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#E66B2D] mb-4">98%</h3>
              <p className="text-lg font-medium text-gray-700">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

 {/* Expert Insights Section */}
 <section id="insights" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <Fade>
                <h2 className="text-3xl font-bold text-center text-logo-orange mb-12">Meet Our Team</h2>
              </Fade>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {/* Team Member 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                >
                  <Image src="/images/team-member1.jpg" alt="Team Member 1" width={96} height={96} className="h-24 w-24 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sia Tata</h3>
                  <p className="text-gray-600">K060</p>
                  <p className="mt-2">Sia is the visionary behind BrightPath, committed to driving growth and innovation in the financial industry.</p>
                </motion.div>

                {/* Team Member 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                >
                  <Image src="/images/team-member2.jpg" alt="Team Member 2" width={96} height={96} className="h-24 w-24 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Neel Shah</h3>
                  <p className="text-gray-600">K047</p>
                  <p className="mt-2">Neel leads our technology initiatives, ensuring we stay at the forefront of financial technology advancements.</p>
                </motion.div>

                {/* Team Member 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                >
                  <Image src="/images/team-member3.jpg" alt="Team Member 3" width={96} height={96} className="h-24 w-24 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Shreya Kale</h3>
                  <p className="text-gray-600">K078</p>
                  <p className="mt-2">Shreya and her team are dedicated to providing exceptional service and support to our valued customers.</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

      {/* Clients Carousel Section */}
      <section id="testimonials" className="py-10 bg-[#e66b2d]">
        <div className="container mx-auto px-6">
          <Fade>
            <h2 className="text-4xl font-bold text-center text-white mb-8">
              What Our Customers Are Saying
            </h2>
          </Fade>
          
          <div className="bg-white p-2 bg-opacity-30 rounded-lg shadow-xl mt-8">
            <ClientsCarousel /> {/* Carousel component */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div>
        <LandingFooter />
      </div>
    </div>
  );
};

export default page;
