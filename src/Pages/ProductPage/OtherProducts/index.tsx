import styles from "./index.module.css";
import { OtherProductCard } from "./OtherProductCard";
import { useLocation } from "react-router-dom";
import data from "../../../data.json";

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
    <div className={styles.box}>
      <h3 className={styles.header}>You may also like</h3>
      <div className={styles.productCardBox}>
        {currentData.map((product: any) => {
          return (
            <OtherProductCard
              img={require(`../../../images/${product.img}`)}
              name={product.name}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
