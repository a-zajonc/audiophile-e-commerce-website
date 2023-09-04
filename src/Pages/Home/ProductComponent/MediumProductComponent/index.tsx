import styles from "./index.module.css";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";

export function MediumProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.header}>ZX7 SPEAKER</h3>
          <Link to="product/zx7">
            <Button colorScheme="primary">See Product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
