/**
 * Luxurious Button component for the perfume website
 * Supports primary (filled) and secondary (outlined) variants
 * with smooth hover transitions and professional styling
 */

import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant,
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background";

  const variantStyles = {
    primary:
      "bg-primary text-text-primary hover:bg-accent hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-text-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
