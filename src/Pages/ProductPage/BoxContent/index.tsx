import styles from "./index.module.css";

type BoxContentProps = {
  insideBox: any;
};

export function BoxContent({ insideBox }: BoxContentProps) {
  return (
    <div className={styles.box}>
      <h3 className={styles.header}>In the box</h3>
      <ul className={styles.list}>
        {insideBox &&
          insideBox.map((element: any) => {
            return (
              <li className={styles.listElement} key={element.name}>
                <p className={styles.quantityText}>{element.quantity}x</p>
                <p className={styles.text}>{element.name}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
