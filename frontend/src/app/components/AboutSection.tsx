// components/AboutSection.tsx
import React from 'react';
import SocialLinks from './SocialLinks';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-1 via-blue-2 to-blue-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-12 mb-4">
                Let's Connect & Build Together
              </h2>
              <p className="text-blue-11 text-lg leading-relaxed">
                I'm passionate about blockchain technology, NFTs, and creating digital experiences 
                that matter. Always eager to collaborate, share knowledge, and connect with fellow 
                developers and creators.
              </p>
            </div>

            {/* Skills/Interests */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-12">What I'm passionate about:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Blockchain Development',
                  'NFT Creation',
                  'Web3 Technologies',
                  'Smart Contracts',
                  'Frontend Development',
                  'Community Building'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-6 text-blue-12 rounded-lg text-sm font-medium border border-blue-7"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action with Social Links */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-blue-12">
                Ready to connect?
              </h3>
              <p className="text-blue-10">
                Follow my journey, check out my code, or just say hello! I'm always open to 
                new opportunities and interesting conversations.
              </p>
              
              {/* Social Links - Featured */}
              <div className="pt-4">
                <SocialLinks variant="large" showLabels={false} />
              </div>
              
              {/* Primary CTA */}
              <div className="pt-6">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-9 hover:bg-blue-10 text-blue-contrast rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-9/25"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-8 via-blue-9 to-blue-10 rounded-3xl blur opacity-20"></div>
            
            {/* Profile/Avatar Card */}
            <div className="relative bg-gray-contrast rounded-2xl p-8 border-2 border-blue-6 shadow-2xl">
              <div className="text-center space-y-6">
                
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-9 to-blue-7 flex items-center justify-center shadow-xl">
                  <span className="text-blue-contrast font-bold text-4xl">EB</span>
                </div>
                
                {/* Bio */}
                <div>
                  <h3 className="text-2xl font-bold text-blue-12 mb-2">ElvisB</h3>
                  <p className="text-blue-10 mb-4">Developer • NFT Creator • Blockchain Enthusiast</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-a4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-9">1</div>
                      <div className="text-sm text-blue-7">NFT Collection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-9">5+</div>
                      <div className="text-sm text-blue-7">Blog Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-9">∞</div>
                      <div className="text-sm text-blue-7">Ideas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;