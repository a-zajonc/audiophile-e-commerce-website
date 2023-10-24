import styles from "./index.module.scss";
import * as React from "react";
import arrow from "../../../../images/shared/desktop/icon-arrow-right.svg";
import { motion } from "framer-motion";
import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";
import { useMedia } from "../../../../context/mediaContext";

type CategoryCardProps = {
  category: string;
  img: string;
};

export function CategoryCard({ category, img }: CategoryCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const { isDesktop } = useMedia();

  return (
    <motion.div
      whileHover={{ y: isDesktop ? "-30px" : "0" }}
      transition={{
        type: isDesktop ? "spring" : null,
        stiffness: isDesktop ? 400 : 0,
        damping: isDesktop ? 10 : 0,
      }}
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
          <Text
            color="primary"
            fontSize="m"
            fontWeight={700}
            headingLevel={3}
            className={styles.heading}
          >
            {category}
          </Text>
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
