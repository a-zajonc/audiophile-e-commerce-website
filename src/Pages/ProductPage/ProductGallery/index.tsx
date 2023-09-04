import styles from "./index.module.css";

export function ProductGallery({ img }: any) {
  return (
    <div className={styles.box}>
      <div className={styles.imgBox}>
        <img
          className={styles.imgFirst}
          src={require(`../../../images/${img.imgFirst}`)}
          alt="gigo"
        />
        <img
          className={styles.imgSecond}
          src={require(`../../../images/${img.imgSecond}`)}
          alt="gigo"
        />
        <img
          className={styles.imgThird}
          src={require(`../../../images/${img.imgThird}`)}
          alt="gigo"
        />
      </div>
    </div>
  );
}
