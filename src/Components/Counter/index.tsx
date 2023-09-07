import styles from "./index.module.scss";

type Props = {
  size: "big" | "small";
  margin?: boolean;
  quantity: number;
};

export function Counter({ size = "big", margin = false, quantity }: Props) {
  return (
    <div
      className={` ${styles.container} ${size && styles[`size-${size}`]} 
      ${margin && styles["container-margin"]}`}
    >
      <p className={styles.mathSign}>-</p>
      <p>{quantity}</p>
      <p className={styles.mathSign}>+</p>
    </div>
  );
}
