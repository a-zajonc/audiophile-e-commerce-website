import styles from "./index.module.scss";
import YX1 from "../../../images/cart/image-yx1-earphones.jpg";

export function ItemDisplay() {
  return (
    <div className={styles.containerRow}>
      <img src={YX1} alt="YX1" className={styles.img} />
      <div className={styles.containerRow}>
        <div className={styles.containerColumn}>
          <p className={styles.name}>XX99 MK II</p>
          <p className={styles.priceText}>$ 2,999</p>
        </div>
        <p>Counter here</p>
      </div>
    </div>
  );
}
