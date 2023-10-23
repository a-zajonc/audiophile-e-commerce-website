import styles from "./index.module.scss";
import logo from "../../images/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { Text } from "../../Components/Text";
import { Stack } from "../../Components/Stack";
import { SiteNavigation } from "../NavBar/SiteNavigation";
import { useMedia } from "../../context/mediaContext";
import { SocialMedia } from "./SocialMedia";

export function Footer() {
  const { isDesktop } = useMedia();

  return (
    <Stack orientation="vertical" className={styles.box}>
      <div className={styles.divider} />
      <Stack
        orientation="vertical"
        spacing="between"
        gap="35px"
        className={styles.container}
      >
        <Stack
          orientation={isDesktop ? "horizontal" : "vertical"}
          spacing="between"
          gap="30px"
        >
          <img src={logo} alt="Shop Logo" className={styles.logo} />
          <SiteNavigation />
        </Stack>
        <Stack orientation="horizontal" spacing="between" align="end">
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
          {isDesktop ? <SocialMedia /> : null}
        </Stack>
        <Stack orientation="horizontal" spacing="between">
          <Text fontSize="s" color="secondary" opacity="m" fontWeight={700}>
            Copyright 2021. All Rights Reserved
          </Text>
          {!isDesktop ? <SocialMedia /> : null}
        </Stack>
      </Stack>
    </Stack>
  );
}
