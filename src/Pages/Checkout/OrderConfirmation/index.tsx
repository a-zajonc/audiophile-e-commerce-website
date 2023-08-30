import * as React from "react";
import styles from "./index.module.scss";
import tickIcon from "../../../images/checkout/icon-order-confirmation.svg";
import { Button } from "../../../Components/button/button";
import headphones from "../../../images/cart/image-xx99-mark-two-headphones.jpg";

export function OrderConfirmation({ handleClick }: any) {
  return (
    <div className={styles.box}>
      <img src={tickIcon} alt="Tick Icon" />
      <h2 className={styles.header}>THANK YOU FOR YOUR ORDER</h2>
      <p className={styles.text}>
        You will receive an email confirmation shortly.
      </p>
      <div className={styles.container}>
        <div className={styles.itemsBox}>
          <div className={styles.boxHorizontal}>
            <img src={headphones} alt="Item Icon" className={styles.itemImg} />
            <div className={styles.boxHorizontalSpace}>
              <div className={styles.boxVertical}>
                <p className={styles.itemName}>XX99 MK II</p>
                <p className={styles.itemPrice}>$ 2,999</p>
              </div>
              <p className={styles.itemQuantity}>x1</p>
            </div>
          </div>
          <div className={styles.line} />
          <p className={styles.smallText}>and 2 other item(s)</p>
        </div>
        <div className={styles.totalBox}>
          <p className={styles.greyText}>GRAND TOTAL</p>
          <p className={styles.priceText}>$ 5,446</p>
        </div>
      </div>
      <Button colorScheme="brand" fullWidth={true} onClick={handleClick}>
        BACK TO HOME
      </Button>
    </div>
  );
}
