import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../../../Components/button/button";
import { Text } from "../../../../Components/Text";
import { Stack } from "../../../../Components/Stack";

type OtherProductCardProps = {
  img: string;
  name: string;
};

export function OtherProductCard({ img, name }: OtherProductCardProps) {
  return (
    <Stack
      orientation="vertical"
      align="center"
      className={styles.box}
      gap="38px"
    >
      <img src={img} alt="device" className={styles.img} />
      <Text
        color="primary"
        fontSize="l"
        fontWeight={700}
        headingLevel={4}
        className={styles.header}
      >
        {name}
      </Text>
      <Link to={`/product/${name.toLowerCase().split(" ").join("-")}`}>
        <Button colorScheme="brand">See Product</Button>
      </Link>
    </Stack>
  );
}
