import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from "react";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "primary" | "active";
};

export const Button = ({ children, className, variant, ...props }: Props) => {
  const variantStyles = useMemo(() => {
    const variantDefault = variant || "primary";

    const styles: string[] = [];

    if (variantDefault === "primary") {
      styles.push("border-slate-100");
      styles.push("bg-slate-50");

      styles.push("hover:bg-slate-100");
    }

    if (variantDefault === "active") {
      styles.push("border-slate-900");
      styles.push("bg-slate-800");
      styles.push("text-slate-50");

      styles.push("hover:bg-slate-900");
    }

    return styles.join(" ");
  }, [variant]);

  return (
    <button className={`px-6 py-1 border hover:shadow transition rounded ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
