import styles from "./index.module.scss";
import warning from "../../images/warning.svg";
import { GoBackButton } from "../GoBackButton";
import { Text } from "../../Components/Text";

export function PageNotFound() {
  return (
    <div className={styles.box}>
      <GoBackButton />
      <img src={warning} alt="Warning Sign" className={styles.img} />
      <Text color="primary" fontSize="m" opacity="m">
        It seems there is no page like the one you're looking for.
      </Text>
      <Text color="primary" fontSize="m" opacity="m" marginTop="40px">
        Please check the URL or go back to the
      </Text>
      <Text color="brand" fontSize="m" marginTop="10px">
        <a href="/" className={styles.hover}>
          homepage
        </a>
      </Text>
    </div>
  );
}
