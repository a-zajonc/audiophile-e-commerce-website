import styles from "./index.module.css";
import { Button } from "../../../../Components/button/button";

type OtherProductCardProps = {
  img: string;
  name: string;
};

export function OtherProductCard({ img, name }: OtherProductCardProps) {
  return (
    <div className={styles.box}>
      <img src={img} alt="device" className={styles.img} />
      <h4 className={styles.header}>{name}</h4>
      <Button colorScheme="brand">See Product</Button>
    </div>
  );
}
