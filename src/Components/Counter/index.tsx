import styles from "./index.module.scss";

type Props = {
  size: "big" | "small";
  margin?: boolean;
};

export function Counter({ size = "big", margin = false }: Props) {
  return (
    <div
      className={` ${styles.container} ${size && styles[`size-${size}`]} 
      ${margin && styles["container-margin"]}`}
    >
      <p className={styles.mathSign}>-</p>
      <p>1</p>
      <p className={styles.mathSign}>+</p>
    </div>
  );
}
