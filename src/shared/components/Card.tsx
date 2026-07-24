import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className = "", ...rest }: CardProps) => {
  return (
    <div
      className={`group w-full rounded-3xl bg-[#131C2E] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/5 hover:ring-cyan-400/30 transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
