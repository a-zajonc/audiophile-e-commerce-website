import { Button } from "../../../Components/button/button";
import { ItemsList } from "./ItemsList";
import styles from "./index.module.scss";

export function CheckoutSummary() {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Summary</h2>
      <ItemsList />
      <div className={styles.container}>
        <div className={styles.costsBox}>
          <div className={styles.textBox}>
            <p className={styles.text}>Total</p>
            <p className={styles.price}>$ 5,396</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>SHIPPING</p>
            <p className={styles.price}>$ 50</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>VAT (INCLUDED)</p>
            <p className={styles.price}>$ 1,079</p>
          </div>
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>GRAND TOTAL</p>
          <p className={styles.total}>$ 5,446</p>
        </div>
      </div>
      <Button colorScheme="brand" fullWidth={true}>
        CONTINUE & PAY
      </Button>
    </div>
  );
}
