import styles from "./index.module.css";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";

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
          <Link to="product/zx9">
            <Button colorScheme="secondary">See Product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
