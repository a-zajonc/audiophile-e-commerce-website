import * as React from "react";
import styles from "./index.module.scss";
import { Button } from "../../Components/button/button";
import { Link } from "react-router-dom";
import { ItemDisplay } from "./ItemDisplay";
import { BasketContext } from "../../context";
import { useSumPrices } from "../../Components/functions/sumPrices";
import { Stack } from "../../Components/Stack";
import { Text } from "../../Components/Text";

export function CartModal({ handleClick }: any) {
  const { basket, setBasket } = React.useContext(BasketContext);
  const total = useSumPrices(basket);

  const handleRemoving = () => {
    setBasket([]);
    window.localStorage.removeItem("basket");
  };

  return (
    <Stack orientation="vertical">
      <Stack orientation="horizontal" spacing="between">
        <Text
          color="primary"
          fontSize="m"
          fontWeight={700}
          className={styles.cartHeader}
        >
          cart {`(${basket ? basket.length : "0"})`}
        </Text>
        <button className={styles.button} onClick={handleRemoving}>
          Remove all
        </button>
      </Stack>
      <Stack orientation="vertical" marginTop="31px">
        {basket
          ? basket.map((item: any) => {
              return (
                <ItemDisplay
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  key={item.name}
                />
              );
            })
          : "Nothing here"}
      </Stack>
      <Stack
        orientation="horizontal"
        spacing="between"
        align="center"
        marginTop="31px"
      >
        <Text color="primary" fontSize="s" opacity="m">
          TOTAL
        </Text>
        <Text
          color="primary"
          fontSize="m"
          fontWeight={700}
          marginBottom="32px"
        >{`$ ${total}`}</Text>
      </Stack>
      <Link to="/checkout">
        <Button fullWidth={true} colorScheme="brand" onClick={handleClick}>
          checkout
        </Button>
      </Link>
    </Stack>
  );
}
