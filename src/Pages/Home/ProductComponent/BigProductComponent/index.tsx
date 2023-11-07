import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Text } from "../../../../Components/Text";
import { Stack } from "../../../../Components/Stack";
import { useMedia } from "../../../../context/mediaContext";

export function BigProductComponent() {
  const { isDesktop } = useMedia();

  return (
    <Stack className={styles.box}>
      <Stack
        orientation={isDesktop ? "horizontal" : "vertical"}
        className={styles.contentBox}
        align={isDesktop ? "end" : "center"}
        spacing={isDesktop ? "between" : "evenly"}
      >
        <motion.div
          whileInView={{ x: isDesktop ? 120 : 0 }}
          transition={{
            ease: isDesktop ? "easeOut" : null,
            duration: isDesktop ? 2 : 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.img}
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
          <Link to="product/zx9" tabIndex={-1}>
            <Button colorScheme="secondary" aria-label="See Product">
              See Product
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
