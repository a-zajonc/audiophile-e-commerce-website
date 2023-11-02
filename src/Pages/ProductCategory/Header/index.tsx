import { Text } from "../../../Components/Text";
import { useMedia } from "../../../context/mediaContext";
import styles from "./index.module.scss";

type Prop = {
  category: string | any;
};

export function CategoryHeader({ category }: Prop) {
  const { isMobile } = useMedia();

  return (
    <div className={styles.box}>
      <Text
        color="secondary"
        fontSize={isMobile ? "xl" : "xxl"}
        fontWeight={700}
        lineHeight="l"
        headingLevel={2}
        className={styles.header}
      >
        {category}
      </Text>
    </div>
  );
}
