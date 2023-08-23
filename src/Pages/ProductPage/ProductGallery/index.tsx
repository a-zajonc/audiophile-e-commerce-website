import styles from "./index.module.css";
import imgFirst from "../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import imgSecond from "../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imgThird from "../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

export function ProductGallery() {
  return (
    <div className={styles.box}>
      <div className={styles.imgBox}>
        <img className={styles.imgFirst} src={imgFirst} alt="gigo" />
        <img className={styles.imgSecond} src={imgSecond} alt="gigo" />
        <img className={styles.imgThird} src={imgThird} alt="gigo" />
      </div>
    </div>
  );
}
