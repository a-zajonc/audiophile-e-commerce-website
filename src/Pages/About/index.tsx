import styles from "./index.module.scss";
import aboutPicture from "../../images/shared/desktop/image-best-gear.jpg";
import { Text } from "../../Components/Text";

export function About() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h3 className={styles.header}>
            Bringing you the <mark className={styles.mark}>best</mark> audio
            gear
          </h3>
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
        </div>
        <img
          src={aboutPicture}
          alt="Man listening to music"
          className={styles.img}
        />
      </div>
    </div>
  );
}
