import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { motion } from "framer-motion";
import { Stack } from "../../../../Components/Stack";

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
          >
            <h3 className={styles.header}>YX1 EARPHONES</h3>
            <Link to="/product/yx1">
              <Button colorScheme="primary">See Product</Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </div>
  );
}
