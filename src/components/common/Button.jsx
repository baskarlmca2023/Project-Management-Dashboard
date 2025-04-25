
import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`custom-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
