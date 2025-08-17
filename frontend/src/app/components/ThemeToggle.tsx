'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import * as Switch from '@radix-ui/react-switch';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const onCheckedChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-3">
      {/* Light mode label - uses conditional coloring */}
      <span className={`text-sm font-medium transition-colors ${
        !isDark ? 'text-gray-12' : 'text-gray-10'
      }`}>
        Light
      </span>
      
      {/* Switch with improved contrast */}
      <Switch.Root
        checked={isDark}
        onCheckedChange={onCheckedChange}
        className="w-12 h-6 bg-gray-6 rounded-full relative data-[state=checked]:bg-blue-9 shadow-inner transition-all duration-200 border border-gray-7 data-[state=checked]:border-blue-10"
        aria-label="Toggle dark mode"
      >
        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transform translate-x-0.5 transition-transform duration-200 data-[state=checked]:translate-x-6 data-[state=checked]:bg-white border border-gray-3 data-[state=checked]:border-blue-3" />
      </Switch.Root>
      
      {/* Dark mode label - uses conditional coloring */}
      <span className={`text-sm font-medium transition-colors ${
        isDark ? 'text-gray-12' : 'text-gray-10'
      }`}>
        Dark
      </span>
    </div>
  );
}
