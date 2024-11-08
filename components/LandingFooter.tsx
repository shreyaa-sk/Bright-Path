import Link from 'next/link';
import React from 'react';

const LandingFooter = () => {
  return (
    <footer className="min-w-screen bg-gray-100">
      {/* Main Footer Links */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Contact Us</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Help Center</Link></li>
              <li className="mb-2"><Link href="/branch-locator" className="text-[#E66B2D] hover:underline">Branch Locator</Link></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Privacy</h4>
            <ul>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Privacy Policy</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Security</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">About Us</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Careers</Link></li>
              <li className="mb-2"><Link href="#" className="text-[#E66B2D] hover:underline">Feedback</Link></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-blue-600 hover:text-blue-800"><img src="/icons/icons8-facebook.svg" alt="Facebook" className="w-6 h-6" /></Link></li>
              <li><Link href="#" className="text-blue-600 hover:text-blue-800"><img src="/icons/icons8-twitter.svg" alt="Twitter" className="w-6 h-6" /></Link></li>
              <li><Link href="#" className="text-blue-600 hover:text-blue-800"><img src="/icons/icons8-instagram.svg" alt="Instagram" className="w-6 h-6" /></Link></li>
              <li><Link href="#" className="text-blue-600 hover:text-blue-800"><img src="/icons/icons8-youtube.svg" alt="YouTube" className="w-6 h-6" /></Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-gray-200 w-full">
        <div className="px-4 sm:px-6 lg:px-8 text-center py-4">
          <p className="text-gray-600">&copy; 2024 BrightPath Corporation. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-4">
            <li><Link href="#" className="text-blue-600 hover:underline">Privacy & Security</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">Terms of Use</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
