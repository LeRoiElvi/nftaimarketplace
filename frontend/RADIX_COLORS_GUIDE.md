# Radix UI Color System Guide

## Overview
This project now uses the Radix UI color system with a custom blue and gray palette. The colors are designed to work seamlessly with Tailwind CSS while providing a consistent design system.

## Color Scales

### Blue Scale (Accent Colors)
The blue scale is used for primary actions, links, and accent elements:

- `blue-1` to `blue-12`: Main blue colors (1 = lightest, 12 = darkest)
- `blue-a1` to `blue-a12`: Alpha/transparent versions
- `blue-contrast`: High contrast text on blue backgrounds
- `blue-surface`: Semi-transparent blue surfaces
- `blue-indicator`: For form indicators
- `blue-track`: For progress tracks

### Gray Scale (Neutral Colors)
The gray scale is used for text, backgrounds, and neutral elements:

- `gray-1` to `gray-12`: Main gray colors (1 = lightest, 12 = darkest)
- `gray-a1` to `gray-a12`: Alpha/transparent versions
- `gray-contrast`: High contrast text on gray backgrounds
- `gray-surface`: Semi-transparent gray surfaces
- `gray-indicator`: For form indicators
- `gray-track`: For progress tracks

## Usage Examples

### Tailwind Classes
```jsx
// Text colors
<div className="text-blue-9">Primary blue text</div>
<div className="text-gray-1">Light gray text</div>
<div className="text-gray-12">Dark gray text</div>

// Background colors
<div className="bg-blue-1">Light blue background</div>
<div className="bg-gray-12">Dark gray background</div>

// Border colors
<div className="border border-blue-6">Blue border</div>
<div className="border border-gray-4">Light gray border</div>

// Hover states
<button className="bg-blue-9 hover:bg-blue-10 text-blue-contrast">
  Primary button
</button>
```

### CSS Variables
```css
/* Direct CSS variable usage */
.my-element {
  color: var(--blue-9);
  background-color: var(--gray-1);
  border-color: var(--gray-4);
}
```

### Alpha Colors
```jsx
// Semi-transparent colors
<div className="bg-blue-a1">Very light blue overlay</div>
<div className="bg-gray-a9">Medium gray overlay</div>
```

## Common Patterns

### Text Hierarchy
- **Primary headings**: `text-gray-1` (white text)
- **Secondary headings**: `text-gray-2` (very light gray)
- **Body text**: `text-gray-4` (light gray)
- **Muted text**: `text-gray-6` (medium gray)
- **Disabled text**: `text-gray-8` (dark gray)

### Interactive Elements
- **Primary buttons**: `bg-blue-9 text-blue-contrast hover:bg-blue-10`
- **Secondary buttons**: `bg-gray-8 text-gray-1 hover:bg-gray-9`
- **Links**: `text-blue-9 hover:text-blue-8`

### Backgrounds
- **Main background**: `bg-gray-12` (dark background)
- **Card backgrounds**: `bg-gray-11` (slightly lighter)
- **Surface overlays**: `bg-gray-surface` (semi-transparent)

### Borders
- **Subtle borders**: `border-gray-9` (dark gray)
- **Light borders**: `border-gray-4` (light gray)
- **Accent borders**: `border-blue-6` (blue accent)

## Migration from Old System

### Old → New
- `text-white` → `text-gray-1`
- `text-[var(--neutral-300)]` → `text-gray-4`
- `text-[var(--neutral-400)]` → `text-gray-5`
- `bg-[var(--accent)]` → `bg-blue-9`
- `border-white/10` → `border-gray-1/10`

### Legacy Support
The old CSS variables are still available for backward compatibility:
- `--background` → `var(--color-background)`
- `--foreground` → `var(--gray-12)`
- `--accent` → `var(--blue-9)`
- `--roielvis` → `var(--blue-9)`

## P3 Color Gamut Support
The color system automatically uses P3 colors on supported displays for richer, more vibrant colors. This is handled automatically by the CSS.

## Best Practices

1. **Use semantic colors**: Choose colors based on their meaning, not just appearance
2. **Maintain contrast**: Ensure sufficient contrast between text and backgrounds
3. **Be consistent**: Use the same color for similar elements throughout the app
4. **Test accessibility**: Verify colors meet WCAG contrast requirements
5. **Use alpha colors sparingly**: They're great for overlays but can reduce readability

## Customization
To modify the color palette, edit the CSS variables in `src/app/radix-colors.css`. The Tailwind config will automatically pick up the changes. 