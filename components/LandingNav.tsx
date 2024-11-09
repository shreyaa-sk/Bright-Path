'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const LandingNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e66b2d] h-16 border-[#E66B2D] sticky top-0 z-50">
      <div className="min-w-screen flex items-start justify-start mx-auto px-2">
        {/* Logo and Brand Name */}
        <Link href="/home" className="flex items-center justify-center my-3">
          <img src="../icons/white_favicon.svg" className="ml-2 justify-center w-10 h-10" alt="BrightPath Logo" />
          <span className="text-3xl font-semibold text-white mr-6">BrightPath</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-end ml-auto my-3 md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 text-white rounded-lg focus:outline-none"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        {/* Navbar Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 bg-opacity-90 right-0 w-60 bg-[#e66b2d] rounded-tr-none rounded-3xl md:static md:w-auto md:flex md:items-center  transition-all duration-300 ease-in-out z-40`} id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row items-center bg-opacity-90 rounded-3xl rounded-tr-none font-medium  md:p-0 md:mt-0 md:space-x-8 bg-[#e66b2d] md:bg-transparent">
            <li>
              <Link href="/home" className="block text-white mt-3 hover:text-logo-brown">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="block py-2 mt-3  text-white hover:text-logo-brown">
                About Us
              </Link>
            </li>
            <li className="relative group">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="block py-2 mt-3 text-white hover:text-logo-brown"
              >
                Products & Services <span className="ml-1">&darr;</span>
              </button>
              <ul className={`${isDropdownOpen ? 'block' : 'hidden'} absolute left-0 bg-logo-orange bg-orange-400 rounded-xl mt-2 drop-shadow-xl w-full max-w-xs`}>
                <li><a href="loan_services.html" className="block px-4 py-2 text-white hover:bg-logo-orange">Loan Services</a></li>
                <li><a href="investment_solutions.html" className="block px-4 py-2 text-white hover:bg-logo-orange">Investment Solutions</a></li>
                <li><a href="mobile_banking.html" className="block px-4 py-2 text-white hover:bg-logo-orange">Mobile Banking</a></li>
              </ul>
            </li>
            <li>
              <Link href="/loans" className="block py-2 mt-3 text-white hover:text-logo-brown">
                Loan Services
              </Link>
            </li>
            <li>
              <Link href="/branch-locator" className="block py-2 mt-3 text-white hover:text-logo-brown">
                Branch/ATM Locator
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="block py-2 mt-3 text-white hover:text-logo-brown">
                Contact Us
              </Link>
            </li>
            {/* Login Link in Mobile Menu */}
            <li className="md:hidden">
              <Link href="/login" className="block py-2 mt-3 mb-3 text-white hover:text-logo-brown">
                Login
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Login Button for Desktop */}
        <Link href="/sign-in" className="hidden md:block ml-auto bg-white text-logo-orange my-3 mr-4 px-3 py-2 rounded-full font-semibold border border-logo-orange hover:bg-logo-orange hover:text-[#E66B2D] transition-colors duration-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default LandingNav;
