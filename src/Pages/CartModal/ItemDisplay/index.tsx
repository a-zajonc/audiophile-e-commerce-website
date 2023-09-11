import * as React from "react";
import styles from "./index.module.scss";
import { Counter } from "../../../Components/Counter";
import { BasketContext } from "../../../context";

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
    <div className={styles.box}>
      <img
        src={require(`../../../images/cart/${img}`)}
        alt={name}
        className={styles.img}
      />
      <div className={styles.containerRow}>
        <div className={styles.containerColumn}>
          <p className={styles.name}>{name}</p>
          <p className={styles.priceText}>{price}</p>
        </div>
        <Counter
          size="small"
          quantity={changedQuantity}
          setQuantity={setChangedQuantity}
        />
      </div>
    </div>
  );
}
