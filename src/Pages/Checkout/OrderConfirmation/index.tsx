import * as React from "react";
import styles from "./index.module.scss";
import tickIcon from "../../../images/checkout/icon-order-confirmation.svg";
import { Button } from "../../../Components/button/button";
import {
  useSumGrandTotal,
  useSumPrices,
} from "../../../Components/functions/sumPrices";
import { BasketContext } from "../../../context";
import { ProductsConfirmation } from "./ProductsConfirmation";
import { Link } from "react-router-dom";

export function OrderConfirmation({ handleClick }: any) {
  const { basket } = React.useContext(BasketContext);
  const total = useSumPrices(basket);
  const grandTotal = useSumGrandTotal(total, 50);

  return (
    <div className={styles.box}>
      <img src={tickIcon} alt="Tick Icon" />
      <h2 className={styles.header}>THANK YOU FOR YOUR ORDER</h2>
      <p className={styles.text}>
        You will receive an email confirmation shortly.
      </p>
      <div className={styles.container}>
        <ProductsConfirmation basket={basket} />
        <div className={styles.totalBox}>
          <p className={styles.greyText}>GRAND TOTAL</p>
          <p className={styles.priceText}>{`$ ${grandTotal}`}</p>
        </div>
      </div>
      <Link to="/">
        <Button colorScheme="brand" fullWidth={true} onClick={handleClick}>
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}
