import { Stack } from "../../../../Components/Stack";
import { Text } from "../../../../Components/Text";
import styles from "./index.module.scss";

type Props = {
  img: string;
  name: string;
  price: string | number;
  quantity: number;
};

export function ItemsList({ img, name, price, quantity }: Props) {
  return (
    <Stack
      orientation="horizontal"
      spacing="between"
      align="center"
      className={styles.box}
    >
      <Stack orientation="horizontal">
        <img
          src={require(`../../../../images/cart/${img}`)}
          alt={name}
          className={styles.img}
        />
        <Stack orientation="vertical" spacing="evenly">
          <Text color="primary" fontSize="s" fontWeight={700}>
            {name}
          </Text>
          <Text color="primary" fontSize="xs" opacity="m">
            {`$ ${Number(price).toLocaleString("en-US")}`}
          </Text>
        </Stack>
      </Stack>
      <Text color="primary" fontSize="s" opacity="m" fontWeight={700}>
        x{quantity}
      </Text>
    </Stack>
  );
}
