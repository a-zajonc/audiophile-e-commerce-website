import styles from "./index.module.scss";
import { OtherProductCard } from "./OtherProductCard";
import { useLocation } from "react-router-dom";
import data from "../../../data.json";
import { removeTypeFromName } from "../../../Components/functions/removeTypeFromName";
import { Text } from "../../../Components/Text";
import { Stack } from "../../../Components/Stack";
import { FadeIn } from "../../../Components/Animations";

function getProducts(data: any, productName: string) {
  const productCategories = Object.values(data.products);

  const allProducts = productCategories.flatMap((category) => category);

  return allProducts.filter(
    (product: any) => product.name.toLowerCase() !== productName.toLowerCase()
  );
}

function getRandomProducts(data: any, count: number) {
  if (count >= data.length) {
    return data;
  } else {
    const shuffledProducts = [...data].sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, count);
  }
}

export function OtherProducts() {
  const location = useLocation();
  const currentProduct = location.pathname.split("/")[2].split("-").join(" ");
  const currentData = getRandomProducts(getProducts(data, currentProduct), 3);

  return (
    <Stack orientation="vertical" className={styles.box} gap="64px">
      <Text
        color="primary"
        fontSize="xxl"
        fontWeight={700}
        lineHeight="m"
        headingLevel={3}
        className={styles.header}
      >
        You may also like
      </Text>
      <Stack orientation="horizontal" spacing="between">
        {currentData.map((product: any) => {
          return (
            <FadeIn key={product.id.toString()}>
              <OtherProductCard
                img={require(`../../../images/${product.img}`)}
                name={removeTypeFromName(product.name)}
              />
            </FadeIn>
          );
        })}
      </Stack>
    </Stack>
  );
}
