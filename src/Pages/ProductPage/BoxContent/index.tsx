import styles from "./index.module.scss";
import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";
import { useMedia } from "../../../context/mediaContext";

type BoxContentProps = {
  insideBox: any;
};

export function BoxContent({ insideBox }: BoxContentProps) {
  const { isTablet, isDesktop } = useMedia();

  return (
    <Stack
      orientation={isTablet ? "horizontal" : "vertical"}
      className={styles.box}
      gap="32px"
      spacing={isDesktop ? "unset" : "between"}
    >
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
      <Stack orientation="vertical" gap="9px">
        {insideBox &&
          insideBox.map((element: any) => {
            return (
              <Stack
                orientation="horizontal"
                align="baseline"
                key={element.name.toString()}
                gap="24px"
              >
                <Text
                  color="brand"
                  fontSize="s"
                  fontWeight={700}
                  lineHeight="s"
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
    </Stack>
  );
}
