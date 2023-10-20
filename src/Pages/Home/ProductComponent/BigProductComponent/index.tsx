import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Text } from "../../../../Components/Text";
import { Stack } from "../../../../Components/Stack";
import { useMedia } from "../../../../context/mediaContext";

export function BigProductComponent() {
  const isTablet = useMedia();

  return (
    <Stack className={styles.box}>
      <Stack
        orientation={isTablet ? "vertical" : "horizontal"}
        className={styles.contentBox}
        align="end"
        spacing="between"
      >
        <motion.div
          whileInView={{ x: 120 }}
          className={styles.img}
          transition={{ ease: "easeOut", duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <Stack orientation="vertical" className={styles.container} gap="24px">
          <Text
            color="secondary"
            fontSize="3xl"
            lineHeight="xl"
            fontWeight={700}
            headingLevel={3}
            className={styles.header}
          >
            ZX9 SPEAKER
          </Text>
          <Text color="secondary" fontSize="s" lineHeight="s" opacity="l">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Link to="product/zx9" className={styles.fitcontent}>
            <Button colorScheme="secondary" tabIndex={-1}>
              See Product
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
