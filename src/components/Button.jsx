const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  rest,
}) => {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-primary-foreground rounded-4xl hover:-translate-y-1 ",
    secondary:
      "bg-primary/10 hover:bg-primary/20 text-primary-light rounded-lg",
  };

  return (
    <button
      className={`font-bold cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
