import type { ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: string;
  align?: string;
  marginTop?: string;
  children: ReactNode;
};

export function Stack({
  className,
  orientation,
  spacing,
  align,
  marginTop,
  children,
}: Props) {
  const customStyle = marginTop ? { marginTop } : {};

  return (
    <div
      className={`${styles.flex}  ${
        orientation && styles[`orientation-${orientation}`]
      }
      ${align && styles[`align-${align}`]}
        ${spacing && styles[`spacing-${spacing}`]}
        ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
}
