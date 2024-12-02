import React, { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  type?: "button";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
