import styles from "./index.module.scss";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Text } from "../Text";
import { Stack } from "../Stack";

type Props = ComponentPropsWithoutRef<"input"> & {
  title: string;
  id: string;
  halfWidth?: false | true;
  name: string;
  errors?: any;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { title, halfWidth = false, name, errors, id, ...inputProps }: Props,
    ref
  ) => (
    <Stack
      className={
        halfWidth === true
          ? `${styles.box} ${styles.halfwidth}`
          : `${styles.box}`
      }
      gap="8px"
    >
      <Stack
        orientation="horizontal"
        spacing="between"
        className={styles.center}
      >
        <label className={styles.title} htmlFor={id}>
          {title}
        </label>
        {errors ? (
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => (
              <Text
                color="error"
                fontSize="xxs"
                className={styles.errorMessage}
              >
                {message}
              </Text>
            )}
          />
        ) : null}
      </Stack>
      <input
        ref={ref}
        id={id}
        className={
          errors && Object.keys(errors).includes(name)
            ? styles.inputError
            : styles.input
        }
        {...inputProps}
      />
    </Stack>
  )
);
