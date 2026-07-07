import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-ri-ink text-white shadow-[0_12px_30px_rgba(11,13,18,0.16)] hover:-translate-y-1 hover:bg-ri-blue hover:shadow-[0_18px_45px_rgba(23,78,255,0.22)] active:translate-y-0",
    secondary: "border border-ri-ink/15 bg-white text-ri-ink shadow-[0_10px_28px_rgba(11,13,18,0.08)] hover:-translate-y-1 hover:border-ri-red hover:shadow-[0_18px_45px_rgba(255,95,102,0.16)] active:translate-y-0",
    quiet: "text-ri-ink underline decoration-ri-red underline-offset-8 hover:text-ri-blue"
  };

  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold outline-none transition duration-300 focus-visible:ring-4 focus-visible:ring-ri-blue/20 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {variant !== "quiet" && <ArrowUpRight size={16} />}
    </a>
  );
}
