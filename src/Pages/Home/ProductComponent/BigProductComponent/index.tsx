import styles from "./index.module.scss";
import { Button } from "../../../../Components/button/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Text } from "../../../../Components/Text";

export function BigProductComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.contentBox}>
        <motion.div
          whileInView={{ x: 90 }}
          className={styles.img}
          transition={{ ease: "easeOut", duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <div className={styles.container}>
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
          <Text
            color="secondary"
            fontSize="s"
            lineHeight="s"
            opacity="l"
            marginTop="24px"
            marginBottom="40px"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Link to="product/zx9">
            <Button colorScheme="secondary">See Product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
