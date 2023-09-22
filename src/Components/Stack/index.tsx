import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: string;
  align?: string;
  marginTop?: string;
  children: ReactNode;
};

export const Stack = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      orientation,
      spacing,
      align,
      marginTop,
      children,
      ...divProps
    }: Props,
    ref
  ) => (
    <div
      className={`${styles.flex}  ${
        orientation && styles[`orientation-${orientation}`]
      }
      ${align && styles[`align-${align}`]}
        ${spacing && styles[`spacing-${spacing}`]}
        ${className}`}
      style={marginTop ? { marginTop } : {}}
      {...divProps}
    >
      {children}
    </div>
  )
);
