
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  reloadDocument?: boolean;
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  reloadDocument = false,
}: Props) {
  return (
    <Link
      to={to}
      reloadDocument={reloadDocument}
      className={
        variant === "primary"
          ? "button-primary"
          : "button-secondary"
      }
    >
      {children}
    </Link>
  );
}
