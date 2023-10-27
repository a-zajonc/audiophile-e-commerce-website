import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";
import styles from "./index.module.scss";

type FeaturesProps = { descriptionFirst?: string; descriptionSecond?: string };

export function Features({
  descriptionFirst,
  descriptionSecond,
}: FeaturesProps) {
  return (
    <Stack
      orientation="vertical"
      spacing="between"
      className={styles.box}
      gap="32px"
    >
      <Text
        color="primary"
        fontSize="xxl"
        fontWeight={700}
        lineHeight="m"
        headingLevel={3}
        className={styles.header}
      >
        Features
      </Text>
      <Text color="primary" fontSize="s" lineHeight="s" opacity="m">
        {descriptionFirst}
      </Text>
      <Text color="primary" fontSize="s" lineHeight="s" opacity="m">
        {descriptionSecond}
      </Text>
    </Stack>
  );
}
