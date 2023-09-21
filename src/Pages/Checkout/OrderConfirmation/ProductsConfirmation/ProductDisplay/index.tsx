import { Stack } from "../../../../../Components/Stack";
import { Text } from "../../../../../Components/Text";
import styles from "./index.module.scss";

export function ProductDisplay(product: any) {
  return (
    <Stack orientation="horizontal" className={styles.margin}>
      <img
        src={require(`../../../../../images/cart/${product.product.img}`)}
        alt="Item Icon"
        className={styles.itemImg}
      />
      <Stack
        orientation="horizontal"
        spacing="between"
        className={styles.width}
      >
        <Stack orientation="vertical">
          <Text color="primary" fontSize="s" fontWeight={700}>
            {product.product.name}
          </Text>
          <Text color="primary" fontSize="xs" opacity="m" fontWeight={700}>
            {`$ ${Number(product.product.price).toLocaleString("en-US")}`}
          </Text>
        </Stack>
        <Text
          color="primary"
          fontSize="s"
          fontWeight={700}
          opacity="m"
        >{`x ${product.product.quantity}`}</Text>
      </Stack>
    </Stack>
  );
}
