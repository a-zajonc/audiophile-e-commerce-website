import styles from "./index.module.css";
import arrow from "../../../../images/shared/desktop/icon-arrow-right.svg";
import { motion } from "framer-motion";

type CategoryCardProps = {
  category: string;
  img: string;
};

export function CategoryCard({ category, img }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: "-30px" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={styles.box}
    >
      <div className={styles.background}>
        <div className={styles.content}>
          <img src={img} alt={category} className={styles.img} />
          <h3 className={styles.heading}>{category}</h3>
          <div className={styles.shopBox}>
            <p>Shop</p>
            <img src={arrow} alt="Arrow" className={styles.arrow} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
