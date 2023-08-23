import { Button } from "../../../../Components/button/button";
import styles from "./index.module.css";

export function MediumProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.header}>ZX7 SPEAKER</h3>
          <Button colorScheme="primary">See Product</Button>
        </div>
      </div>
    </div>
  );
}
