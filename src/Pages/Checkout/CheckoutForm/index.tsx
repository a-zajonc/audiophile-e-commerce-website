import { Input } from "../../../Components/input/input";
import styles from "./index.module.scss";

export function CheckoutForm() {
  return (
    <div className={styles.box}>
      <h3 className={styles.header}>Checkout</h3>
      <p className={styles.formTitle}>Billing Details</p>
      <div className={styles.inputsBox}>
        <Input title="Name"></Input>
        <Input title="Email Address"></Input>
      </div>
      <div className={styles.inputsBox}>
        <Input title="Phone Number" halfWidth={true}></Input>
      </div>
    </div>
  );
}
