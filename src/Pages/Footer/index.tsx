import styles from "./index.module.scss";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as TwitterIcon } from "../../images/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../images/shared/desktop/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "../../images/shared/desktop/icon-facebook.svg";
import { Link } from "react-router-dom";
import { Text } from "../../Components/Text";

export function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.vertical}>
        <div className={styles.divider} />
        <div className={styles.container}>
          <div className={`${styles.vertical} ${styles.space}`}>
            <img src={logo} alt="Shop Logo" className={styles.logo} />
            <div className={styles.textContainer}>
              <Text color="secondary" fontSize="s" lineHeight="s" opacity="m">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </Text>
            </div>
            <div className={styles.copyrightBox}>
              <Text fontSize="s" color="secondary" opacity="m" fontWeight={700}>
                Copyright 2021. All Rights Reserved
              </Text>
            </div>
          </div>
          <div className={`${styles.vertical} ${styles.space}`}>
            <div className={styles.categories}>
              <Link to="/">
                <div className={styles.category}>Home</div>
              </Link>
              <Link to="/category/headphones">
                <div className={styles.category}>Headphones</div>
              </Link>
              <Link to="/category/speakers">
                <div className={styles.category}>Speakers</div>
              </Link>
              <Link to="/category/earphones">
                <div className={styles.category}>Earphones</div>
              </Link>
            </div>
            <div className={styles.socialMediaBox}>
              <FacebookIcon className={styles.icon} />
              <TwitterIcon className={styles.icon} />
              <InstagramIcon className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
