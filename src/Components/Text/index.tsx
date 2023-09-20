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
      marginTop,
      ...textProps
    }: TextProps,
    ref
  ) => {
    const customStyle = marginTop ? { marginTop } : {};

    return (
      <p
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
      </p>
    );
  }
);
