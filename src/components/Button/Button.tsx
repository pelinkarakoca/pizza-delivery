export default function Button({
  className = "",
  onClick,
  children,
  type = "button",
  disabled = false,
}) {
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
}
