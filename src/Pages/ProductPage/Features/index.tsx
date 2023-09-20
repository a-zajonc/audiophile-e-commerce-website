import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";
import styles from "./index.module.scss";

type FeaturesProps = { descriptionFirst?: string; descriptionSecond?: string };

export function Features({
  descriptionFirst,
  descriptionSecond,
}: FeaturesProps) {
  return (
    <Stack orientation="vertical" spacing="between" className={styles.box}>
      <h3 className={styles.header}>Features</h3>
      <Text color="primary" fontSize="s" lineHeight="s" opacity="m">
        {descriptionFirst}
      </Text>
      <Text color="primary" fontSize="s" lineHeight="s" opacity="m">
        {descriptionSecond}
      </Text>
    </Stack>
  );
}
