import * as React from "react";
import { Button } from "../../Components/button/button";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { ItemDisplay } from "./ItemDisplay";
import { BasketContext } from "../../context";

export function CartModal({ handleClick }: any) {
  const { basket, setBasket } = React.useContext(BasketContext);

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.cartHeader}>
          cart {`(${basket ? basket.length : "0"})`}
        </p>
        <button className={styles.button} onClick={() => setBasket()}>
          Remove all
        </button>
      </div>
      <div>
        {basket
          ? basket.map((item: any) => {
              return (
                <ItemDisplay
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  key={item.name}
                />
              );
            })
          : "Nothing here"}
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
