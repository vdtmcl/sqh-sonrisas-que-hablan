import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-ri-ink text-white hover:-translate-y-1 hover:bg-ri-blue",
    secondary: "border border-ri-ink/15 bg-white text-ri-ink hover:-translate-y-1 hover:border-ri-red",
    quiet: "text-ri-ink underline decoration-ri-red underline-offset-8 hover:text-ri-blue"
  };

  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {variant !== "quiet" && <ArrowUpRight size={16} />}
    </a>
  );
}
