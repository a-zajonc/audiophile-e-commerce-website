import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/button/button";
import { Text } from "../../../Components/Text";
import { NewProduct } from "../../../Components/NewProduct";
import { Stack } from "../../../Components/Stack";
import { useMedia } from "../../../context/mediaContext";

export function Header() {
  const { isMobile } = useMedia();

  return (
    <Stack className={styles.background}>
      <Stack
        orientation="vertical"
        align="baseline"
        className={styles.content}
        gap={isMobile ? "24px" : "35px"}
      >
        <NewProduct color="secondary" />
        <Text
          color="secondary"
          fontSize={isMobile ? "xxl" : "3xl"}
          fontWeight={700}
          lineHeight="xl"
          headingLevel={1}
          className={styles.title}
        >
          XX99 Mark II Headphones
        </Text>
        <Text color="secondary" fontSize="s" lineHeight="s" opacity="l">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Link to="/product/xx99-mark-ii-headphones" tabIndex={-1}>
          <Button colorScheme="brand" aria-label="See Product">
            See Product
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
