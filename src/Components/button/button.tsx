import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  colorScheme: "primary" | "secondary" | "brand";
  margin?: true | false;
  children?: ReactNode;
  // onClick: () => void;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type = "button",
      colorScheme = "primary",
      margin = true,
      children,
      ...buttonProps
    }: Props,
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={`${styles.button}  ${
        colorScheme && styles[`color-scheme-${colorScheme}`]
      }       ${margin && styles.margin}`}
    >
      {children}
    </button>
  )
);
