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
  marginTop?: string;
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
      marginTop,
      headingLevel,
      ...textProps
    }: TextProps,
    ref
  ) => {
    const customStyle = marginTop ? { marginTop } : {};

    const Element =
      headingLevel && headingLevel >= 1 && headingLevel <= 6
        ? (`h${headingLevel}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
        : "p";

    return (
      <Element
        ref={ref}
        className={`${styles.text} ${color && styles[`color-${color}`]} ${
          fontSize && styles[`font-size-${fontSize}`]
        } ${fontWeight && styles[`font-weight-${fontWeight}`]} ${
          lineHeight && styles[`line-height-${lineHeight}`]
        } =
        ${opacity && styles[`opacity-${opacity}`]}     ${className}
    
       `}
        style={customStyle}
        {...textProps}
      >
        {children}
      </Element>
    );
  }
);
