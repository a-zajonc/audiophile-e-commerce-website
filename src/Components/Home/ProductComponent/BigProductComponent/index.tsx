import styles from "./index.module.css";

export function BigProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.contentBox}>
        <div className={styles.img} />
        <div className={styles.text}>
          <h3 className={styles.header}>ZX9 SPEAKER</h3>
          <p className={styles.description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className={styles.button}>See product</button>
        </div>
      </div>
    </div>
  );
}
