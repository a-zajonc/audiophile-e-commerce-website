import * as React from "react";
import styles from "./index.module.scss";
import tickIcon from "../../../images/checkout/icon-order-confirmation.svg";
import { Button } from "../../../Components/button/button";
import {
  useSumGrandTotal,
  useSumPrices,
} from "../../../Components/functions/sumPrices";
import { BasketContext } from "../../../context/basketContext";
import { ProductsConfirmation } from "./ProductsConfirmation";
import { Link } from "react-router-dom";
import { Text } from "../../../Components/Text";
import { Stack } from "../../../Components/Stack";
import { useMedia } from "../../../context/mediaContext";

export function OrderConfirmation({ handleClick }: any) {
  const { basket } = React.useContext(BasketContext);
  const total = useSumPrices(basket);
  const grandTotal = useSumGrandTotal(total, 50);
  const { isMobile } = useMedia();

  return (
    <Stack orientation="vertical" className={styles.box} gap="20px">
      <img src={tickIcon} alt="Tick Icon" className={styles.icon} />
      <Text
        color="primary"
        fontSize={isMobile ? "l" : "xl"}
        fontWeight={700}
        lineHeight="m"
        headingLevel={2}
        className={styles.header}
      >
        THANK YOU <br></br>FOR YOUR ORDER
      </Text>
      <Text color="primary" opacity="m" fontSize="s">
        You will receive an email confirmation shortly.
      </Text>
      <Stack
        orientation={isMobile ? "vertical" : "horizontal"}
        className={styles.container}
      >
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
          >{`$ ${grandTotal}`}</Text>
        </Stack>
      </Stack>
      <Link to="/">
        <Button colorScheme="brand" fullWidth={true} onClick={handleClick}>
          BACK TO HOME
        </Button>
      </Link>
    </Stack>
  );
}
