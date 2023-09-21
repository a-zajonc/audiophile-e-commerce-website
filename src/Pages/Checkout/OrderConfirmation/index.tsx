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
import { Text } from "../../../Components/Text";
import { Stack } from "../../../Components/Stack";

export function OrderConfirmation({ handleClick }: any) {
  const { basket } = React.useContext(BasketContext);
  const total = useSumPrices(basket);
  const grandTotal = useSumGrandTotal(total, 50);

  return (
    <div className={styles.box}>
      <img src={tickIcon} alt="Tick Icon" />
      <h2 className={styles.header}>THANK YOU FOR YOUR ORDER</h2>
      <Text color="primary" opacity="m" fontSize="s">
        You will receive an email confirmation shortly.
      </Text>
      <Stack orientation="horizontal" className={styles.container}>
        <ProductsConfirmation basket={basket} />
        <Stack
          orientation="vertical"
          spacing="flexEnd"
          className={styles.totalBox}
        >
          <Text color="secondary" opacity="m" fontSize="s">
            GRAND TOTAL
          </Text>
          <Text
            color="secondary"
            fontSize="m"
            fontWeight={700}
            marginTop="8px"
          >{`$ ${grandTotal}`}</Text>
        </Stack>
      </Stack>
      <Link to="/">
        <Button colorScheme="brand" fullWidth={true} onClick={handleClick}>
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}
