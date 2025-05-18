import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = 'Button';
