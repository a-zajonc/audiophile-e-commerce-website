import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

type Props = ComponentPropsWithoutRef<"input"> & {
  title: string;
  halfWidth?: false | true;
  name: string;
  errors?: any;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ title, halfWidth = false, name, errors, ...inputProps }: Props, ref) => (
    <div
      className={
        halfWidth === true
          ? `${styles.box} ${styles.halfwidth}`
          : `${styles.box}`
      }
    >
      <div className={styles.horizontal}>
        <label className={styles.title}>{title}</label>
        {errors ? (
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => (
              <p className={styles.errorMessage}>{message}</p>
            )}
          />
        ) : null}
      </div>
      <input
        ref={ref}
        className={
          errors && Object.keys(errors).includes(name)
            ? styles.inputError
            : styles.input
        }
        {...inputProps}
      />
    </div>
  )
);
