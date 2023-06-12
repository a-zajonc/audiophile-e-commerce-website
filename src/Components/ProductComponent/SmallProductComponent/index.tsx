import styles from "./index.module.css";

export function SmallProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.img} />
        <div className={styles.container}>
          <div className={styles.text}>
            <h3 className={styles.header}>YX1 EARPHONES</h3>
            <button className={styles.button}>See product</button>
          </div>
        </div>
      </div>
    </div>
  );
}
