import styles from "./index.module.css";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../../images/shared/desktop/icon-cart.svg";

export function NavBar() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <img src={logo} alt="Shop Logo" className={styles.logo} />
        <div className={styles.categories}>
          <div className={styles.category}>Home</div>
          <div className={styles.category}>Headphones</div>
          <div className={styles.category}>Speakers</div>
          <div className={styles.category}>Earphones</div>
        </div>
        <Cart className={styles.cartIcon} />
      </div>
      <div className={styles.divider} />
    </div>
  );
}
