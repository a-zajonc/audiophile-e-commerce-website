import styles from "./index.module.scss";
import aboutPictureDesktop from "../../images/shared/desktop/image-best-gear.jpg";
import aboutPictureTablet from "../../images/shared/tablet/image-best-gear.jpg";
import { Text } from "../../Components/Text";
import { Stack } from "../../Components/Stack";
import { useMedia } from "../../context/mediaContext";

export function About() {
  const isTablet = useMedia();

  return (
    <div className={styles.box}>
      <Stack
        orientation={isTablet ? "vertical-reverse" : "horizontal"}
        gap="100px"
      >
        <Stack
          orientation="vertical"
          spacing="center"
          gap="40px"
          className={styles.padding}
        >
          <Text
            color="primary"
            fontSize="xxl"
            lineHeight="l"
            fontWeight={700}
            headingLevel={3}
            className={styles.header}
          >
            Bringing you the <mark className={styles.mark}>best</mark>
            {isTablet ? <br></br> : null}
            audio gear
          </Text>
          <Text color="primary" fontSize="s" lineHeight="s" opacity="m">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </Stack>
        <img
          src={isTablet ? aboutPictureTablet : aboutPictureDesktop}
          alt="Man listening to music"
          className={styles.img}
        />
      </Stack>
    </div>
  );
}
