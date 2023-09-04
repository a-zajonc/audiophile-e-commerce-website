import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../../Components/button/button";

type OtherProductCardProps = {
  img: string;
  name: string;
};

export function OtherProductCard({ img, name }: OtherProductCardProps) {
  return (
    <div className={styles.box}>
      <img src={img} alt="device" className={styles.img} />
      <h4 className={styles.header}>
        {name.split(" ").slice(0, -1).join(" ")}
      </h4>
      <Link to={`/product/${name.toLowerCase().split(" ").join("-")}`}>
        <Button colorScheme="brand">See Product</Button>
      </Link>
    </div>
  );
}
