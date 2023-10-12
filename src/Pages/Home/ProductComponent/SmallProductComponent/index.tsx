import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { motion } from "framer-motion";
import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";

export function SmallProductComponent() {
  return (
    <div className={styles.box}>
      <Stack orientation="horizontal" className={styles.content}>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          className={styles.img}
          initial={{ x: -800 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          className={styles.container}
          initial={{ x: 800 }}
          transition={{ duration: 2 }}
        >
          <Stack
            orientation="vertical"
            align="flex-start"
            className={styles.text}
            gap="32px"
          >
            <Text
              color="primary"
              fontSize="xl"
              fontWeight={700}
              lineHeight="l"
              headingLevel={3}
              className={styles.header}
            >
              YX1 EARPHONES
            </Text>
            <Link to="/product/yx1">
              <Button colorScheme="primary">See Product</Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </div>
  );
}
