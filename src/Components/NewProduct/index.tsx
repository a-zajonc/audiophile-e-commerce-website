import styles from "./index.module.scss";
import { Text } from "../Text";
import clsx from "clsx";

type Props = {
  color: "brand" | "secondary";
};

export function NewProduct({ color }: Props) {
  return (
    <Text
      color={color}
      fontSize="xs"
      className={
        color === "brand"
          ? styles.text
          : clsx(styles.text, styles["text-opacity"])
      }
    >
      New Product
    </Text>
  );
}
