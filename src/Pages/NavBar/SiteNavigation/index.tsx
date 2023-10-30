import { Stack } from "../../../Components/Stack";
import { Link } from "react-router-dom";
import { Text } from "../../../Components/Text";
import styles from "./index.module.scss";
import { useMedia } from "../../../context/mediaContext";

export function SiteNavigation() {
  const { isMobile } = useMedia();

  return (
    <Stack
      orientation={isMobile ? "vertical" : "horizontal"}
      gap="34px"
      className={styles.box}
      align={isMobile ? "center" : "left"}
    >
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
