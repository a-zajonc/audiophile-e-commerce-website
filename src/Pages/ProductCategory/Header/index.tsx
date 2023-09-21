import { Text } from "../../../Components/Text";
import styles from "./index.module.scss";

type Prop = {
  category: string | any;
};

export function CategoryHeader({ category }: Prop) {
  return (
    <div className={styles.box}>
      <Text
        color="secondary"
        fontSize="xxl"
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
