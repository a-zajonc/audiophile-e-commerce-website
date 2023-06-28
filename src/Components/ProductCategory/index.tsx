import styles from "./index.module.css";
import { Categories } from "../Home/Categories";
import { CategoryHeader } from "./Header";
import { ProductPage } from "./ProductPage/";

export function ProductCategory() {
  return (
    <div className={styles.box}>
      <CategoryHeader />
      <ProductPage />
      <Categories />
    </div>
  );
}
