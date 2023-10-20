import styles from "./index.module.scss";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as TwitterIcon } from "../../images/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../images/shared/desktop/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "../../images/shared/desktop/icon-facebook.svg";
import { Link } from "react-router-dom";
import { Text } from "../../Components/Text";
import { Stack } from "../../Components/Stack";

import { SiteNavigation } from "../NavBar/SiteNavigation";

export function Footer() {
  return (
    <Stack orientation="horizontal" className={styles.box}>
      <div className={styles.divider} />
      <Stack
        orientation="horizontal"
        spacing="between"
        className={styles.container}
      >
        <Stack orientation="vertical" gap="20px">
          <img src={logo} alt="Shop Logo" className={styles.logo} />
          <Text
            color="secondary"
            fontSize="s"
            lineHeight="s"
            opacity="l"
            className={styles.textWidth}
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Text>
          <Text fontSize="s" color="secondary" opacity="m" fontWeight={700}>
            Copyright 2021. All Rights Reserved
          </Text>
        </Stack>
        <Stack orientation="vertical" align="end" gap="150px">
          <SiteNavigation />
          <Stack orientation="horizontal">
            <FacebookIcon className={styles.icon} />
            <TwitterIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
