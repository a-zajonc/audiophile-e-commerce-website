import styles from "./index.module.scss";
import warning from "../../images/warning.svg";
import { GoBackButton } from "../GoBackButton";
import { Text } from "../../Components/Text";
import { Stack } from "../../Components/Stack";

export function PageNotFound() {
  return (
    <Stack orientation="vertical" className={styles.box} gap="30px">
      <GoBackButton />
      <img src={warning} alt="Warning Sign" className={styles.img} />
      <Text color="primary" fontSize="m" opacity="m">
        It seems there is no page like the one you're looking for.
      </Text>
      <Stack orientation="vertical" gap="15px">
        <Text color="primary" fontSize="m" opacity="m">
          Please check the URL or go back to the
        </Text>
        <Text color="brand" fontSize="m">
          <a href="/" className={styles.hover}>
            homepage
          </a>
        </Text>
      </Stack>
    </Stack>
  );
}
