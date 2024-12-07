import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: Props) => {
  return <div className={`px-3 py-2 border shadow border-slate-200 rounded ${className}`}>{children}</div>;
};
