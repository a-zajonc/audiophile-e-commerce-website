import styles from "./index.module.scss";
import * as React from "react";
import arrow from "../../../../images/shared/desktop/icon-arrow-right.svg";
import { motion } from "framer-motion";
import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";

type CategoryCardProps = {
  category: string;
  img: string;
};

export function CategoryCard({ category, img }: CategoryCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ y: "-30px" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.background}>
        <Stack
          orientation="vertical"
          spacing="center"
          align="center"
          className={styles.content}
        >
          <img src={img} alt={category} className={styles.img} />
          <h3 className={styles.heading}>{category}</h3>
          <Stack
            orientation="horizontal"
            spacing="around"
            align="center"
            className={styles.container}
          >
            <Text
              color={isHovered ? "brand" : "primary"}
              fontSize="xxs"
              opacity={isHovered ? undefined : "m"}
              fontWeight={700}
              lineHeight="xs"
            >
              Shop
            </Text>
            <img src={arrow} alt="Arrow" className={styles.arrow} />
          </Stack>
        </Stack>
      </div>
    </motion.div>
  );
}
