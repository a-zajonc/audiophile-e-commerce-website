import styles from "./index.module.css";

export function ProductGallery({ img }: any) {
  return (
    <div className={styles.imgBox}>
      <img
        className={styles.imgFirst}
        src={require(`../../../images/${img.imgFirst}`)}
        alt="Product"
      />
      <img
        className={styles.imgSecond}
        src={require(`../../../images/${img.imgSecond}`)}
        alt="Product"
      />
      <img
        className={styles.imgThird}
        src={require(`../../../images/${img.imgThird}`)}
        alt="Product"
      />
    </div>
  );
}
