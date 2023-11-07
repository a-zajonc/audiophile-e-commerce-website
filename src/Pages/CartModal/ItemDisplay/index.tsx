import * as React from "react";
import styles from "./index.module.scss";
import { Counter } from "../../../Components/Counter";
import { BasketContext } from "../../../context/basketContext";
import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";
import { motion } from "framer-motion";
import clsx from "clsx";

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

  const removeItem = (nameToFind: any) => {
    const updatedBasket = basket.filter(
      (item: any) => item.name !== nameToFind
    );
    setBasket(updatedBasket);
  };

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
            {clsx("$", Number(price).toLocaleString("en-US"))}
          </Text>
        </Stack>
        {changedQuantity === 0 ? null : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Counter
              size="small"
              quantity={changedQuantity}
              onQuantityChange={(newQuantity) => {
                setChangedQuantity(newQuantity);
                updateBasket(name, newQuantity);
              }}
              mininumQuantity={0}
            />
          </motion.div>
        )}
        {changedQuantity === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Stack
              orientation="vertical"
              spacing="evenly"
              className={styles.deleteBox}
            >
              <Text color="primary" fontSize="xxs">
                Sure to remove item?
              </Text>
              <Stack orientation="horizontal" spacing="between">
                <button
                  className={styles.button}
                  onClick={() => removeItem(name)}
                  aria-label="Remove Item"
                >
                  Remove
                </button>
                <div className={styles.divider} />
                <button
                  className={styles.button}
                  onClick={() => setChangedQuantity(1)}
                  aria-label="Cancel"
                >
                  Cancel
                </button>
              </Stack>
            </Stack>
          </motion.div>
        ) : null}
      </Stack>
    </Stack>
  );
}
