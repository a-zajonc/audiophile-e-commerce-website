import styles from "./index.module.scss";

type Props = {
  img: string;
  name: string;
  price: string | number;
  quantity: number;
};

export function ItemsList({ img, name, price, quantity }: Props) {
  return (
    <div className={styles.itemBox}>
      <div className={styles.container}>
        <img
          src={require(`../../../../images/cart/${img}`)}
          alt={name}
          className={styles.img}
        />
        <div className={styles.textContainer}>
          <p className={styles.itemName}>{name}</p>
          <p className={styles.itemPrice}>{`$ ${price}`}</p>
        </div>
      </div>
      <p className={styles.itemQuanity}>x{quantity}</p>
    </div>
  );
}
