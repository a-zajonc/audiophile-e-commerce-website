import { Button } from "../../../../Components/button/button";
import styles from "./index.module.css";

export function SmallProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.img} />
        <div className={styles.container}>
          <div className={styles.text}>
            <h3 className={styles.header}>YX1 EARPHONES</h3>
            <Button colorScheme="primary">See Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
