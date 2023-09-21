import styles from "./index.module.scss";
import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";

type BoxContentProps = {
  insideBox: any;
};

export function BoxContent({ insideBox }: BoxContentProps) {
  return (
    <Stack orientation="vertical" className={styles.box}>
      <Text
        color="primary"
        fontSize="xxl"
        fontWeight={700}
        lineHeight="m"
        headingLevel={3}
        className={styles.header}
      >
        In the box
      </Text>
      {insideBox &&
        insideBox.map((element: any) => {
          return (
            <Stack
              orientation="horizontal"
              align="baseline"
              className={styles.listElement}
              key={element.name}
            >
              <Text
                color="brand"
                fontSize="s"
                fontWeight={700}
                lineHeight="s"
                className={styles.marginRight}
              >
                {element.quantity}x
              </Text>
              <Text color="primary" fontSize="s" opacity="m" lineHeight="m">
                {element.name}
              </Text>
            </Stack>
          );
        })}
    </Stack>
  );
}
