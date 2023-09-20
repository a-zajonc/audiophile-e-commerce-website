import type { ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: string;
  align?: string;
  children: ReactNode;
};

export function Stack({
  className,
  orientation,
  spacing,
  align,
  children,
}: Props) {
  return (
    <div
      className={`${styles.flex}  ${
        orientation && styles[`orientation-${orientation}`]
      }
      ${align && styles[`align-${align}`]}
        ${spacing && styles[`spacing-${spacing}`]}
        ${className}`}
    >
      {children}
    </div>
  );
}
