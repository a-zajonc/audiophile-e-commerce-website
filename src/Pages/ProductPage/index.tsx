import styles from "./index.module.css";
import { ProductCard } from "../ProductCategory/ProductPage/ProductCard";
import data from "../../data.json";
import { Features } from "./Features";
import { BoxContent } from "./BoxContent";
import { Categories } from "../Home/Categories";
import { ProductGallery } from "./ProductGallery";
import { OtherProducts } from "./OtherProducts";
import { GoBackButton } from "../GoBackButton";
import { useLocation } from "react-router-dom";

function findProductByKeyword(keyword: string) {
  const products = Object.values(data.products);

  const matchingProducts = [];

  for (const productCategory of products) {
    for (const product of productCategory) {
      if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
        matchingProducts.push(product);
      }
    }
  }
  return matchingProducts;
}

export function ProductPage() {
  let location = useLocation();
  let pathname = location.pathname.split("/")[2].split("-").join(" ");

  const matchingProducts = findProductByKeyword(pathname);

  return (
    <div>
      <div className={styles.box}>
        <GoBackButton />
        <div>
          <ProductCard
            productName={matchingProducts[0].name}
            productDescription={matchingProducts[0].description}
            isProductNew={matchingProducts[0].new}
            productImg={matchingProducts[0].img}
            productPrice={matchingProducts[0].price}
            mode={"buy"}
          />
          <div className={styles.boxDescription}>
            <Features
              descriptionFirst={matchingProducts[0].features?.[0]}
              descriptionSecond={matchingProducts[0].features?.[1]}
            />
            <BoxContent content={matchingProducts[0].boxContent} />
          </div>
        </div>
        <ProductGallery img={matchingProducts[0].productGallery} />
        <OtherProducts />
      </div>
      <Categories />
    </div>
  );
}
