import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  colorScheme: "primary" | "secondary" | "brand";
  fullWidth?: true | false;
  children?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type = "button",
      colorScheme = "primary",
      fullWidth = false,
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
      }       ${fullWidth && styles[`color-scheme-${colorScheme}-fullWidth`]}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
);
