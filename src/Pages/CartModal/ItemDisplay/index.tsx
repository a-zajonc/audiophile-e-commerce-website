import styles from "./index.module.scss";
import { Counter } from "../../../Components/Counter";

type Props = {
  name: string;
  img: string;
  price: string;
};

export function ItemDisplay({ name, img, price }: Props) {
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
        <Counter size="small" />
      </div>
    </div>
  );
}
