import styles from "./index.module.scss";
import * as React from "react";

type Props = {
  size: "big" | "small";
  margin?: boolean;
  quantity: number;
  mininumQuantity?: number;
  setQuantity?: any;
};

export function Counter({
  size = "big",
  margin = false,
  quantity = 1,
  setQuantity,
  mininumQuantity = 1,
}: Props) {
  const [counter, setCounter] = React.useState(quantity);

  function handleClick(mathSign: string) {
    return mathSign === "minus"
      ? setCounter(counter - 1)
      : setCounter(counter + 1);
  }

  React.useEffect(() => {
    if (setQuantity) {
      setQuantity(counter);
    }
  }, [counter, setQuantity]);

  return (
    <div
      className={` ${styles.container} ${size && styles[`size-${size}`]} 
      ${margin && styles["container-margin"]}`}
    >
      <button
        className={styles.mathSign}
        onClick={() => handleClick("minus")}
        disabled={counter < mininumQuantity + 1}
      >
        -
      </button>
      <p>{counter !== 1 ? counter : quantity}</p>
      <button className={styles.mathSign} onClick={() => handleClick("plus")}>
        +
      </button>
    </div>
  );
}
