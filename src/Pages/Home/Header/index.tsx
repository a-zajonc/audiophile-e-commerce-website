import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/button/button";

export function Header() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h3 className={styles.text}>NEW PRODUCT</h3>
        <h1 className={styles.title}>XX99 Mark II Headphones</h1>
        <p className={styles.description}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/product/xx99-mark-ii-headphones">
          <Button colorScheme="brand">See Product</Button>
        </Link>
      </div>
    </div>
  );
}
