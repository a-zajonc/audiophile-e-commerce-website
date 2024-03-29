import clsx from "clsx";
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
  headingLevel?: number;
  children?: ReactNode;
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      color,
      fontSize,
      fontWeight = 500,
      lineHeight = "s",
      children,
      opacity,
      className,
      headingLevel,
      ...textProps
    }: TextProps,
    ref
  ) => {
    const Element =
      headingLevel && headingLevel >= 1 && headingLevel <= 6
        ? (`h${headingLevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
        : "p";

    return (
      <Element
        ref={ref}
        className={clsx(
          styles.text,
          color && styles[`color-${color}`],
          fontSize && styles[`font-size-${fontSize}`],
          fontWeight && styles[`font-weight-${fontWeight}`],
          lineHeight && styles[`line-height-${lineHeight}`],
          opacity && styles[`opacity-${opacity}`],
          className
        )}
        {...textProps}
      >
        {children}
      </Element>
    );
  }
);
