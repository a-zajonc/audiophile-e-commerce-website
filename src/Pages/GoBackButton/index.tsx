import { Text } from "../../Components/Text";
import styles from "./index.module.scss";

export function GoBackButton() {
  return (
    <button
      className={styles.button}
      onClick={() => window.history.back()}
      aria-label="Go Back"
    >
      <Text fontSize="s" color="primary" opacity="m">
        Go Back
      </Text>
    </button>
  );
}
