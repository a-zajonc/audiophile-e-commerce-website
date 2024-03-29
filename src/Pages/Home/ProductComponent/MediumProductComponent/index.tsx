import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";
import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";

export function MediumProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <Stack
          orientation="vertical"
          align="flex-start"
          gap="30px"
          className={styles.text}
        >
          <Text
            color="primary"
            fontSize="xl"
            fontWeight={700}
            lineHeight="l"
            headingLevel={3}
            className={styles.header}
          >
            ZX7 SPEAKER
          </Text>
          <Link to="product/zx7" tabIndex={-1}>
            <Button colorScheme="primary" aria-label="See Product">
              See Product
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}
