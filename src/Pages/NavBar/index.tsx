import styles from "./index.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../../images/shared/desktop/icon-cart.svg";

export function NavBar() {
  return (
    <div className={styles.boxProduct}>
      <div className={styles.content}>
        <Link to="/">
          <img src={logo} alt="Shop Logo" className={styles.logo} />
        </Link>
        <div className={styles.categories}>
          <Link to="/">
            <div className={styles.category}>Home</div>
          </Link>
          <Link to="/category/headphones">
            <div className={styles.category}>Headphones</div>
          </Link>
          <Link to="/category/speakers">
            <div className={styles.category}>Speakers</div>
          </Link>
          <Link to="/category/earphones">
            <div className={styles.category}>Earphones</div>
          </Link>
        </div>
        <Cart className={styles.cartIcon} />
      </div>
      <div className={styles.divider} />
    </div>
  );
}
