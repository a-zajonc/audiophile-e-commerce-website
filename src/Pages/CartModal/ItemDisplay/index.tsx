import * as React from "react";
import styles from "./index.module.scss";
import { Counter } from "../../../Components/Counter";
import { BasketContext } from "../../../context";
import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";

type Props = {
  name: string;
  img: string;
  price: string;
  quantity: number;
};

export function ItemDisplay({ name, img, price, quantity }: Props) {
  const { basket, setBasket } = React.useContext(BasketContext);
  const [changedQuantity, setChangedQuantity] = React.useState(quantity);

  const updateBasket = (nameToFind: any, newQuantity: any) => {
    const updatedBasket = basket.map((item: any) => {
      if (item.name === nameToFind) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setBasket(updatedBasket);
  };

  React.useEffect(() => {
    updateBasket(name, changedQuantity);
  }, [changedQuantity, name, setBasket]);

  return (
    <Stack orientation="horizontal" className={styles.box}>
      <img
        src={require(`../../../images/cart/${img}`)}
        alt={name}
        className={styles.img}
      />
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        className={styles.width}
      >
        <Stack orientation="vertical">
          <Text color="primary" fontSize="xs" fontWeight={700}>
            {name}
          </Text>
          <Text
            color="primary"
            fontSize="xs"
            fontWeight={700}
            opacity="m"
            className={styles.priceText}
          >
            {`$ ${Number(price).toLocaleString("en-US")}`}
          </Text>
        </Stack>
        <Counter
          size="small"
          quantity={changedQuantity}
          setQuantity={setChangedQuantity}
        />
      </Stack>
    </Stack>
  );
}
