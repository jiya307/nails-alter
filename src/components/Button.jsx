import { Link } from "react-router-dom";

export default function Button({ children, to, onClick, variant = "primary", className = "", type = "button" }) {
  const base = "inline-flex items-center justify-center gap-2 text-sm tracking-widest uppercase transition-all duration-300";

  const variants = {
    primary: "bg-charcoal text-ivory px-8 py-4 hover:bg-brown",
    secondary: "border border-charcoal text-charcoal px-8 py-4 hover:bg-charcoal hover:text-ivory",
    ghost: "text-charcoal underline underline-offset-4 hover:text-gold",
    gold: "bg-gold text-charcoal px-8 py-4 hover:bg-brown hover:text-ivory",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
