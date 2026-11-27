import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ to, children, variant = "primary" }: Props) {
  return (
    <Link className={variant === "primary" ? "button-primary" : "button-secondary"} to={to}>
      {children}
    </Link>
  );
}
