import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  title: string;
  halfWidth?: false | true;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ title, halfWidth = false }: Props, ref) => (
    <div
      className={
        halfWidth === true
          ? `${styles.box} ${styles.halfwidth}`
          : `${styles.box}`
      }
    >
      <label className={styles.title}>{title}</label>
      <input ref={ref} className={styles.input}></input>
    </div>
  )
);
