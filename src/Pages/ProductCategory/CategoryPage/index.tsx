import styles from "./index.module.scss";
import { ProductCard } from "./ProductCard";
import data from "../../../data.json";
import { useParams } from "react-router-dom";
import { FadeIn } from "../../../Components/Animations";
import { Stack } from "../../../Components/Stack";
import { useMedia } from "../../../context/mediaContext";

export function CategoryPage() {
  const { categoryName } = useParams();
  const { isDesktop } = useMedia();

  const dataCategory =
    categoryName?.toLowerCase() === "headphones"
      ? data.products.headphones
      : categoryName?.toLowerCase() === "speakers"
      ? data.products.speakers
      : data.products.earphones;

  return (
    <Stack orientation="vertical" className={styles.box} gap="180px">
      {dataCategory.map((product: any, index: number) => {
        const isReversed = index % 2 === 1;
        return (
          <FadeIn key={product.name}>
            <ProductCard
              productName={product.name}
              productDescription={product.description}
              productImg={isDesktop ? product.img.desktop : product.img.tablet}
              isProductNew={product.new}
              mode={"see"}
              isReversed={isReversed}
            />
          </FadeIn>
        );
      })}
    </Stack>
  );
}
