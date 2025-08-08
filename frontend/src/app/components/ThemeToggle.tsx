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
      <span className="text-sm text-blue-7">Light</span>
      <Switch.Root
        checked={isDark}
        onCheckedChange={onCheckedChange}
        className="w-12 h-6 bg-blue-a3 rounded-full relative data-[state=checked]:bg-blue-9 shadow-inner transition-colors"
        aria-label="Toggle dark mode"
      >
        <Switch.Thumb className="block w-5 h-5 bg-blue-contrast rounded-full shadow transform translate-x-0.5 transition-transform data-[state=checked]:translate-x-6" />
      </Switch.Root>
      <span className="text-sm text-blue-7">Dark</span>
    </div>
  );
}

