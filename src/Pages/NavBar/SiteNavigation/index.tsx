import { Stack } from "../../../Components/Stack";
import { Link } from "react-router-dom";
import { Text } from "../../../Components/Text";
import styles from "./index.module.scss";

export function SiteNavigation() {
  return (
    <Stack orientation="horizontal" gap="34px" className={styles.box}>
      <Link to="/">
        <Text
          fontSize="xxs"
          color="secondary"
          fontWeight={700}
          className={styles.category}
          headingLevel={5}
        >
          Home
        </Text>
      </Link>
      <Link to="/category/headphones">
        <Text
          fontSize="xxs"
          color="secondary"
          fontWeight={700}
          className={styles.category}
          headingLevel={5}
        >
          Headphones
        </Text>
      </Link>
      <Link to="/category/speakers">
        <Text
          fontSize="xxs"
          color="secondary"
          fontWeight={700}
          className={styles.category}
          headingLevel={5}
        >
          Speakers
        </Text>
      </Link>
      <Link to="/category/earphones">
        <Text
          fontSize="xxs"
          color="secondary"
          fontWeight={700}
          className={styles.category}
          headingLevel={5}
        >
          Earphones
        </Text>
      </Link>
    </Stack>
  );
}
