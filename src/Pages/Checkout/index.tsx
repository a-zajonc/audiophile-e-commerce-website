import styles from "./index.module.scss";
import { GoBackButton } from "../GoBackButton";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";

export function Checkout() {
  return (
    <div className={styles.box}>
      <GoBackButton />
      <div className={styles.container}>
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
}
