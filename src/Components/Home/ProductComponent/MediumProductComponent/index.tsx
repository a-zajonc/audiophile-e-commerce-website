import styles from "./index.module.css";

export function MediumProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.header}>ZX7 SPEAKER</h3>
          <button className={styles.button}>See product</button>
        </div>
      </div>
    </div>
  );
}
