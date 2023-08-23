import styles from "./index.module.css";

type BoxContentProps = {
  content: any;
};

export function BoxContent({ content }: BoxContentProps) {
  return (
    <div className={styles.box}>
      <h3 className={styles.header}>In the box</h3>
      <ul className={styles.list}>
        {content.map((element: any) => {
          return (
            <li className={styles.listElement}>
              <p className={styles.quantityText}>{element.quantity}x</p>
              <p className={styles.text}>{element.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
