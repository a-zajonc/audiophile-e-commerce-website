import styles from "./index.module.css";
import { GoBackButton } from "../GoBackButton";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";

export function Checkout() {
  return (
    <div className={styles.box}>
      <GoBackButton />
      <div>
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
}
