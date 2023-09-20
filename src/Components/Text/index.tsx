import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";

type TextProps = ComponentPropsWithoutRef<"p"> & {
  color: string;
  fontSize: string;
  lineHeight?: string;
  fontWeight?: number;
  opacity?: string;
  className?: string;
  children?: ReactNode;
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      color,
      fontSize,
      fontWeight = 500,
      lineHeight,
      children,
      opacity,
      className,
      ...textProps
    }: TextProps,
    ref
  ) => (
    <p
      ref={ref}
      className={`${styles.text} ${color && styles[`color-${color}`]} ${
        fontSize && styles[`font-size-${fontSize}`]
      } ${fontWeight && styles[`font-weight-${fontWeight}`]} ${
        lineHeight && styles[`line-height-${lineHeight}`]
      } =
        ${opacity && styles[`opacity-${opacity}`]}     ${className}`}
      {...textProps}
    >
      {children}
    </p>
  )
);
