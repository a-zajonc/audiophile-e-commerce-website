import { Link } from "react-router-dom";
import { Button } from "../../../../Components/button/button";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export function SmallProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
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
          <div className={styles.text}>
            <h3 className={styles.header}>YX1 EARPHONES</h3>
            <Link to="/product/yx1">
              <Button colorScheme="primary">See Product</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
