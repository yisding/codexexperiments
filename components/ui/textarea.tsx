import React from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => (
    <textarea
      ref={ref}
      className="border rounded w-full p-2"
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
