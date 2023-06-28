import styles from "./index.module.css";
import { ProductCard } from "./ProductCard";
import data from "../../../data.json";

export function ProductPage() {
  return (
    <div className={styles.box}>
      {data.products.headphones.map((product) => {
        return (
          <ProductCard
            key={product.id}
            productName={product.name}
            productDescription={product.description}
            productImg={product.img}
            isProductNew={product.new}
          />
        );
      })}
    </div>
  );
}
