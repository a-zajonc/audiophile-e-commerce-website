import styles from "./index.module.scss";
import YX1 from "../../../../images/cart/image-yx1-earphones.jpg";
import XX99 from "../../../../images/cart/image-xx99-mark-two-headphones.jpg";
import XX59 from "../../../../images/cart/image-xx59-headphones.jpg";

const basket = [
  {
    id: 0,
    img: XX99,
    name: "XX99 MK II",
    price: "$ 2,999",
    quantity: "1",
  },
  {
    id: 1,
    img: XX59,
    name: "XX59",
    price: "$ 899",
    quantity: "2",
  },
  {
    id: 2,
    img: YX1,
    name: "YX1",
    price: "$ 599",
    quantity: "1",
  },
];

export function ItemsList() {
  return (
    <div>
      {basket.map((item) => {
        return (
          <div className={styles.itemBox} key={item.id}>
            <div className={styles.container}>
              <img src={item.img} alt={item.name} className={styles.img} />
              <div className={styles.textContainer}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemPrice}> {item.price}</p>
              </div>
            </div>
            <p className={styles.itemQuanity}>x{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}
