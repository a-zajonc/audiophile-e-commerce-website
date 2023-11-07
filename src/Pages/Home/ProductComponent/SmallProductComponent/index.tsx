import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { motion, useInView } from "framer-motion";
import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";
import { useMedia } from "../../../../context/mediaContext";

export function SmallProductComponent() {
  const { isTablet, isMobile } = useMedia();
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={styles.box}>
      <Stack
        orientation={isMobile ? "vertical" : "horizontal"}
        gap={isTablet ? "10px" : "40px"}
      >
        <motion.div
          className={styles.img}
          ref={ref}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            filter: isInView ? "blur(0px)" : "blur(4px)",
          }}
          transition={{
            duration: 1,
            delay: 0.05,
          }}
        />
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            filter: isInView ? "blur(0px)" : "blur(4px)",
          }}
          transition={{
            duration: 1,
            delay: 0.05,
          }}
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
            <Link to="/product/yx1" tabIndex={-1}>
              <Button colorScheme="primary" aria-label="See Product">
                See Product
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </div>
  );
}
