import React from "react";

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  rest,
}) => {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-primary-foreground sm:text-lg font-bold rounded-4xl hover:-translate-y-1 transition-all duration-300",
    secondary:
      "bg-surface text-primary text-lg rounded-4xl font-bold hover:bg-surface",
  };

  return (
    <button
      className={`px-6 py-3 cursor-pointer inline-flex items-center gap-2 ${variants[variant]} ${className}`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
