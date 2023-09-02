import * as React from "react";
import { Button } from "../../Components/button/button";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { ItemDisplay } from "./ItemDisplay";

export function CartModal({ handleClick }: any) {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.cartHeader}>cart (3)</p>
        <p className={styles.text}>Remove all</p>
      </div>
      <div>
        <ItemDisplay />
      </div>
      <div className={styles.container}>
        <p className={styles.text}>TOTAL</p>
        <p className={styles.price}>$ 5,396</p>
      </div>
      <Link to="/checkout">
        <Button fullWidth={true} colorScheme="brand" onClick={handleClick}>
          checkout
        </Button>
      </Link>
    </div>
  );
}
