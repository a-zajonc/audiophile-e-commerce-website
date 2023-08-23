import styles from "./index.module.css";
import { OtherProductCard } from "./OtherProductCard";
import XX99 from "../../../images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import XX59 from "../../../images/shared/desktop/image-xx59-headphones.jpg";
import ZX9 from "../../../images/shared/desktop/image-zx9-speaker.jpg";

export function OtherProducts() {
  return (
    <div className={styles.box}>
      <h3 className={styles.header}>You may also like</h3>
      <div className={styles.productCardBox}>
        <OtherProductCard img={XX99} name={"XX99 MARK I"} />
        <OtherProductCard img={XX59} name={"XX59"} />
        <OtherProductCard img={ZX9} name={"ZX9 SPEAKER"} />
      </div>
    </div>
  );
}
