import styles from "./index.module.css";
import gigo1 from "../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import gigo2 from "../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import gigo3 from "../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

export function ProductGallery() {
  return (
    <div className={styles.box}>
      <div className={styles.imgBox}>
        <img className={styles.imgFirst} src={gigo1} alt="gigo" />
        <img className={styles.imgSecond} src={gigo2} alt="gigo" />
        <img className={styles.imgThird} src={gigo3} alt="gigo" />
      </div>
    </div>
  );
}
