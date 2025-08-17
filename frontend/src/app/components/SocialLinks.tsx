// components/SocialLinks.tsx
import React from 'react';

interface SocialLinksProps {
  variant?: 'default' | 'large' | 'minimal';
  className?: string;
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  variant = 'default', 
  className = '',
  showLabels = false 
}) => {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/LeRoiElvi',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/elvis_buxt9073',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/elvisbuxton/',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.028.387a5.918 5.918 0 0 0-2.137 1.39A5.937 5.937 0 0 0 1.5 4.915c-.183.492-.305 1.066-.34 2.013C1.125 7.875 1.125 8.282 1.125 11.903s0 4.028.035 4.975c.035.947.157 1.521.34 2.013a5.918 5.918 0 0 0 1.39 2.137 5.937 5.937 0 0 0 2.137 1.391c.492.183 1.066.305 2.013.34.947.035 1.354.035 4.975.035s4.028 0 4.975-.035c.947-.035 1.521-.157 2.013-.34a5.918 5.918 0 0 0 2.137-1.39 5.937 5.937 0 0 0 1.391-2.137c.183-.492.305-1.066.34-2.013.035-.947.035-1.354.035-4.975s0-4.028-.035-4.975c-.035-.947-.157-1.521-.34-2.013a5.918 5.918 0 0 0-1.39-2.137A5.937 5.937 0 0 0 20.073 1.5c-.492-.183-1.066-.305-2.013-.34C17.113.013 16.706.013 13.085.013H12.017zm-.056 2.163c.234 0 .49.002.695.01 3.375 0 3.773.012 5.105.044.926.042 1.43.196 1.764.326.444.173.761.378 1.094.711s.538.65.711 1.094c.13.334.284.838.326 1.764.032 1.332.044 1.73.044 5.105s-.012 3.773-.044 5.105c-.042.926-.196 1.43-.326 1.764a2.954 2.954 0 0 1-.711 1.094 2.962 2.962 0 0 1-1.094.711c-.334.13-.838.284-1.764.326-1.332.032-1.73.044-5.105.044s-3.773-.012-5.105-.044c-.926-.042-1.43-.196-1.764-.326a2.954 2.954 0 0 1-1.094-.711 2.962 2.962 0 0 1-.711-1.094c-.13-.334-.284-.838-.326-1.764-.032-1.332-.044-1.73-.044-5.105s.012-3.773.044-5.105c.042-.926.196-1.43.326-1.764.173-.444.378-.761.711-1.094a2.954 2.954 0 0 1 1.094-.711c.334-.13.838-.284 1.764-.326 1.166-.032 1.617-.044 4.105-.044l1 .002zm0 3.683a5.154 5.154 0 1 0 0 10.308 5.154 5.154 0 0 0 0-10.308zm0 8.5a3.346 3.346 0 1 1 0-6.692 3.346 3.346 0 0 1 0 6.692zm6.561-8.707a1.204 1.204 0 1 1-2.408 0 1.204 1.204 0 0 1 2.408 0z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:elvisbuxton@gmail.com',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  const getSizeClasses = () => {
    switch (variant) {
      case 'large':
        return 'w-8 h-8';
      case 'minimal':
        return 'w-4 h-4';
      default:
        return 'w-6 h-6';
    }
  };

  const getSpacingClasses = () => {
    switch (variant) {
      case 'large':
        return 'space-x-6';
      case 'minimal':
        return 'space-x-3';
      default:
        return 'space-x-4';
    }
  };

  return (
    <div className={`flex items-center ${getSpacingClasses()} ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.name === 'Email' ? '_self' : '_blank'}
          rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
          className={`${getSizeClasses()} text-blue-7 hover:text-blue-9 transition-all duration-300 hover:scale-110`}
          aria-label={`Visit my ${social.name}`}
        >
          {social.icon}
          {showLabels && (
            <span className="ml-2 text-sm font-medium">{social.name}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;