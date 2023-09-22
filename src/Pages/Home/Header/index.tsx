import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/button/button";
import { Text } from "../../../Components/Text";
import { NewProduct } from "../../../Components/NewProduct";
import { Stack } from "../../../Components/Stack";

export function Header() {
  return (
    <div className={styles.box}>
      <Stack orientation="vertical" align="baseline" className={styles.content}>
        <NewProduct color="secondary" />
        <Text
          color="secondary"
          fontSize="3xl"
          fontWeight={700}
          lineHeight="xl"
          headingLevel={1}
          marginTop="27px"
          className={styles.title}
        >
          XX99 Mark II Headphones
        </Text>
        <Text
          color="secondary"
          fontSize="s"
          lineHeight="s"
          opacity="l"
          marginTop="47px"
          marginBottom="32px"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link to="/product/xx99-mark-ii-headphones">
          <Button colorScheme="brand">See Product</Button>
        </Link>
      </Stack>
    </div>
  );
}
