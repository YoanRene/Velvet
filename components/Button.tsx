import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  href,
  ...props 
}) => {
  // Added inline-block to ensure anchors behave like buttons in flow
  const baseStyles = "inline-block text-center cursor-pointer px-8 py-3 transition-all duration-300 tracking-wider font-sans text-sm uppercase font-bold border-2";
  
  const variants = {
    primary: "border-transparent bg-velvet-800 text-white hover:bg-velvet-900 shadow-lg hover:shadow-xl",
    outline: "border-velvet-800 text-velvet-800 hover:bg-velvet-800 hover:text-white bg-transparent",
    white: "border-transparent bg-white text-stone-900 hover:bg-stone-100 shadow-lg"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={finalClassName} 
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={finalClassName} 
      {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};