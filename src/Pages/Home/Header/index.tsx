import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/button/button";
import { Text } from "../../../Components/Text";
import { NewProduct } from "../../../Components/NewProduct";

export function Header() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <NewProduct color="secondary" />
        <h1 className={`${styles.title} ${styles.marginBottom}`}>
          XX99 Mark II Headphones
        </h1>
        <Text
          color="secondary"
          fontSize="s"
          lineHeight="s"
          opacity="l"
          style={{ marginBottom: "44px", paddingRight: "30px" }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link to="/product/xx99-mark-ii-headphones">
          <Button colorScheme="brand">See Product</Button>
        </Link>
      </div>
    </div>
  );
}
