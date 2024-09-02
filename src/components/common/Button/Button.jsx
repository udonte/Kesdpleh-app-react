import React from "react";

const Button = ({
  type = "button",
  size = "md",
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded focus:outline-none transition";

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]}  ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
