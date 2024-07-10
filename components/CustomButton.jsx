import React from "react";

const CustomButton = ({ onClick, children, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
