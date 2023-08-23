import styles from "./index.module.css";
import { ProductCard } from "../ProductCategory/ProductPage/ProductCard";
import data from "../../data.json";
import { Features } from "./Features";
import { BoxContent } from "./BoxContent";
import { Categories } from "../Home/Categories";
import { ProductGallery } from "./ProductGallery";
import { OtherProducts } from "./OtherProducts";
import { GoBackButton } from "../GoBackButton";

export function ProductPage() {
  return (
    <div>
      <div className={styles.box}>
        <GoBackButton />
        <div>
          <ProductCard
            productName={data.products.headphones[0].name}
            productDescription={data.products.headphones[0].description}
            isProductNew={data.products.headphones[0].new}
            productImg={data.products.headphones[0].img}
            mode={"buy"}
          />
          <div className={styles.boxDescription}>
            <Features
              descriptionFirst={data.products.headphones[0].features?.[0]}
              descriptionSecond={data.products.headphones[0].features?.[1]}
            />
            <BoxContent content={data.products.headphones[0].boxContent} />
          </div>
        </div>
        <ProductGallery />
        <OtherProducts />
      </div>
      <Categories />
    </div>
  );
}
