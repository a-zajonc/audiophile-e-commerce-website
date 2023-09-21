import styles from "./index.module.scss";
import aboutPicture from "../../images/shared/desktop/image-best-gear.jpg";
import { Text } from "../../Components/Text";
import { Stack } from "../../Components/Stack";

export function About() {
  return (
    <div className={styles.box}>
      <Stack orientation="horizontal">
        <Stack
          orientation="vertical"
          spacing="center"
          className={styles.marginRight}
        >
          <Text
            color="primary"
            fontSize="xxl"
            lineHeight="l"
            fontWeight={700}
            headingLevel={3}
            className={styles.header}
          >
            Bringing you the <mark className={styles.mark}>best</mark> audio
            gear
          </Text>
          <Text
            color="primary"
            fontSize="s"
            lineHeight="s"
            opacity="m"
            style={{ marginTop: "32px" }}
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </Stack>
        <img
          src={aboutPicture}
          alt="Man listening to music"
          className={styles.img}
        />
      </Stack>
    </div>
  );
}
