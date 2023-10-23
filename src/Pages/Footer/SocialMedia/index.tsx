import styles from "./index.module.scss";
import { Stack } from "../../../Components/Stack";
import { ReactComponent as TwitterIcon } from "../../../images/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../../images/shared/desktop/icon-instagram.svg";
import { ReactComponent as FacebookIcon } from "../../../images/shared/desktop/icon-facebook.svg";

export function SocialMedia() {
  return (
    <Stack orientation="horizontal">
      <FacebookIcon className={styles.icon} />
      <TwitterIcon className={styles.icon} />
      <InstagramIcon className={styles.icon} />
    </Stack>
  );
}
