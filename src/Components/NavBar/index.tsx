import styles from "./index.module.css";
import logo from "../../images/shared/desktop/logo.svg";
import cart from "../../images/shared/desktop/icon-cart.svg";

export function NavBar() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <img src={logo} alt="Shop Logo" className={styles.logo} />
        <div className={styles.categories}>
          <div>Home</div> <div>Headphones</div> <div>Speakers</div>
          <div>Earphones</div>
        </div>
        <img src={cart} alt="Cart" className={styles.cartIcon} />
      </div>
    </div>
  );
}
