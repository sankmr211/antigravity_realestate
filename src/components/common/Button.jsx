import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', icon: Icon, onClick, ...props }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon size={20} style={{ marginRight: '8px' }} />}
      {children}
    </button>
  );
};

export default Button;
