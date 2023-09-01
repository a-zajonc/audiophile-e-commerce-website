import styles from "./index.module.css";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as TwitterIcon } from "../../images/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../images/shared/desktop/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "../../images/shared/desktop/icon-facebook.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.divider} />
      <div className={styles.navigation}>
        <img src={logo} alt="Shop Logo" className={styles.logo} />
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
      </div>
      <p className={styles.description}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className={styles.socialMediaBox}>
        <FacebookIcon className={styles.icon} />
        <TwitterIcon className={styles.icon} />
        <InstagramIcon className={styles.icon} />
      </div>
      <p className={styles.copyrightBox}>Copyright 2021. All Rights Reserved</p>
    </div>
  );
}
