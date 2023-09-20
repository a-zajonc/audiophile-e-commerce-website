import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";
import { Stack } from "../../../../Components/Stack";

export function MediumProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <Stack
          orientation="vertical"
          align="flex-start"
          className={styles.text}
        >
          <h3 className={styles.header}>ZX7 SPEAKER</h3>
          <Link to="product/zx7">
            <Button colorScheme="primary">See Product</Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}
