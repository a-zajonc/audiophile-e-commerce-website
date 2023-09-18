import styles from "./index.module.scss";
import { ProductCard } from "./ProductCard";
import data from "../../../data.json";
import { useParams } from "react-router-dom";
import { FadeIn } from "../../../Components/Animations";

export function ProductPage() {
  const { categoryName } = useParams();

  const dataCategory =
    categoryName?.toLowerCase() === "headphones"
      ? data.products.headphones
      : categoryName?.toLowerCase() === "speakers"
      ? data.products.speakers
      : data.products.earphones;

  return (
    <div className={styles.box}>
      {dataCategory.map((product: any, index: number) => {
        const isReversed = index % 2 === 1;

        return (
          <FadeIn key={product.name}>
            <ProductCard
              productName={product.name}
              productDescription={product.description}
              productImg={product.img}
              isProductNew={product.new}
              mode={"see"}
              isReversed={isReversed}
            />
          </FadeIn>
        );
      })}
    </div>
  );
}
