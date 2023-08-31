import styles from "./index.module.css";
import { ProductCard } from "./ProductCard";
import data from "../../../data.json";
import { useParams } from "react-router-dom";

type Prop = {
  category: string | undefined;
};

export function ProductPage({ category }: Prop) {
  // const gigo = () => {
  //   if (window.location.href.includes("headphones")) {
  //     return `${data.products.headphones}`;
  //   }
  //   if (window.location.href.includes("earphones")) {
  //     return data.products.earphones;
  //   }
  //   if (window.location.href.includes("speakers")) {
  //     return data.products.speakers;
  //   }
  // };

  const { categoryName } = useParams();

  const gigo =
    categoryName === "headphones"
      ? data.products.headphones
      : categoryName === "speakers"
      ? data.products.speakers
      : data.products.earphones;

  return (
    <div className={styles.box}>
      {gigo.map((product: any) => {
        return (
          <ProductCard
            key={product.id}
            productName={product.name}
            productDescription={product.description}
            productImg={product.img}
            isProductNew={product.new}
            mode={"see"}
          />
        );
      })}
    </div>
  );
}
