import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { motion } from "framer-motion";
import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";
import { useMedia } from "../../../../context/mediaContext";

export function SmallProductComponent() {
  const { isTablet, isMobile } = useMedia();

  return (
    <div className={styles.box}>
      <Stack
        orientation={isMobile ? "vertical" : "horizontal"}
        gap={isTablet ? "10px" : "40px"}
      >
        <motion.div
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          animate={{ rotate: 360 }}
          className={styles.img}
          // initial={{ x: -800 }}
          // transition={{ duration: 2 }}
        />
        <motion.div
          viewport={{ once: true }}
          whileInView={{ x: 0 }}
          className={styles.container}
          animate={{ rotate: 360 }}
          // initial={{ x: 800 }}
          // transition={{ duration: 2 }}
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
              <Button colorScheme="primary" tabIndex={-1}>
                See Product
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </div>
  );
}
