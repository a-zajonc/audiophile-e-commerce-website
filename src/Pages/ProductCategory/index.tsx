import styles from "./index.module.css";
import { Categories } from "../Home/Categories";
import { CategoryHeader } from "./Header";
import { ProductPage } from "./ProductPage";
import { useParams } from "react-router-dom";

export function ProductCategory() {
  const { categoryName } = useParams();

  return (
    <div className={styles.box}>
      <CategoryHeader category={categoryName} />
      <ProductPage />
      <Categories />
    </div>
  );
}
