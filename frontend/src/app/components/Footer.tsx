// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-blue-a4 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-8 space-y-8 lg:space-y-0">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-9 via-blue-8 to-blue-10 shadow-lg shadow-blue-9/20 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-contrast rounded-md"></div>
              </div>
              <div>
                <span className="text-blue-9 font-bold text-xl block">BoosterB</span>
                <span className="text-gray-11 text-sm font-medium">Building the future, one project at a time</span>
              </div>
            </div>
            
            {/* Social Links - Primary Location */}
            <div className="pl-16"> {/* Align with text above */}
              <p className="text-gray-11 text-sm mb-3 font-medium">Connect with me:</p>
              <SocialLinks variant="default" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-12 font-semibold text-lg mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                <Link href="/#about" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  About Me
                </Link>
                <Link href="/#nfts" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  My NFTs
                </Link>
                <Link href="/blog" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  Blog
                </Link>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-gray-12 font-semibold text-lg mb-4">Projects</h3>
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  ElvisMinecraft Collection
                </a>
                <a href="#" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  NFT Marketplace
                </a>
                <a href="#" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  Web3 Tools
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gray-12 font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="flex flex-col space-y-3">
                <a 
                  href="mailto:elvisbuxton@gmail.com" 
                  className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium"
                >
                  Email Me
                </a>
                <a href="#" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  Collaboration
                </a>
                <a href="#" className="text-gray-11 hover:text-blue-9 transition-colors text-sm font-medium">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-blue-a4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-gray-11 font-medium text-sm">
              © 2025 BoosterB. All rights reserved.
            </p>
            
            {/* Secondary Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-11 text-sm">Follow me:</span>
              <SocialLinks variant="minimal" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;