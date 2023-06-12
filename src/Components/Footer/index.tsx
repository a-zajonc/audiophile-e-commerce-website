import styles from "./index.module.css";
import logo from "../../images/shared/desktop/logo.svg";
import twitterIcon from "../../images/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../images/shared/desktop/icon-instagram.svg";
import facebookIcon from "../../images/shared/desktop/icon-facebook.svg";

export function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.navigation}>
        <img src={logo} alt="Shop Logo" className={styles.logo} />
        <div className={styles.categories}>
          <div>Home</div> <div>Headphones</div> <div>Speakers</div>
          <div>Earphones</div>
        </div>
      </div>
      <p className={styles.description}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className={styles.socialMediaBox}>
        <img src={facebookIcon} alt="Facebook Icon" />
        <img src={twitterIcon} alt="Twitter Icon" />
        <img src={instagramIcon} alt="Instagram Icon" />
      </div>
      <p className={styles.copyrightBox}>Copyright 2021. All Rights Reserved</p>
    </div>
  );
}
