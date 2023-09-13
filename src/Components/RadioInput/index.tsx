import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  title: string;
  radioName: string;
  setOption: any;
};

export const RadioInput = forwardRef<HTMLInputElement, Props>(
  ({ title, radioName, setOption, ...inputProps }: Props, ref) => (
    <label className={styles.label} htmlFor={title}>
      <input
        ref={ref}
        className={styles.input}
        type="radio"
        name={radioName}
        id={title}
        value={title}
        onClick={() => {
          setOption(title);
        }}
        {...inputProps}
      />
      {title}
    </label>
  )
);
