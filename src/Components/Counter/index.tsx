import clsx from "clsx";
import styles from "./index.module.scss";
import * as React from "react";

type Props = {
  size: "big" | "small";
  margin?: boolean;
  quantity: number;
  mininumQuantity?: number;
  onQuantityChange: (newQuantity: number) => void;
};

export function Counter({
  size = "big",
  margin = false,
  quantity = 1,
  mininumQuantity = 1,
  onQuantityChange,
}: Props) {
  const [counter, setCounter] = React.useState(quantity);

  function handleClick(mathSign: string) {
    const newCounter = mathSign === "minus" ? counter - 1 : counter + 1;
    if (newCounter >= mininumQuantity) {
      setCounter(newCounter);
      onQuantityChange(newCounter);
    }
  }

  return (
    <div
      className={clsx(
        styles.container,
        size && styles[`size-${size}`],
        margin && styles["container-margin"]
      )}
    >
      <button
        className={styles.mathSign}
        onClick={() => handleClick("minus")}
        disabled={counter <= mininumQuantity}
        aria-label="Less"
      >
        -
      </button>
      <p>{counter !== 1 ? counter : quantity}</p>
      <button
        className={styles.mathSign}
        onClick={() => handleClick("plus")}
        aria-label="More"
      >
        +
      </button>
    </div>
  );
}
