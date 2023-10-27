import styles from "./index.module.scss";
import { Stack } from "../../Components/Stack";
import { Categories } from "../Home/Categories";
import { CategoryHeader } from "./Header";
import { CategoryPage } from "./CategoryPage";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { PageNotFound } from "../PageNotFound";

export function ProductCategory() {
  const { categoryName } = useParams();

  return (
    <Stack orientation="vertical" gap="120px">
      {categoryName && Object.keys(data.products).includes(categoryName) ? (
        <>
          <CategoryHeader category={categoryName} />
          <CategoryPage />
          <div className={styles.box}>
            <Categories />
          </div>
        </>
      ) : (
        <PageNotFound />
      )}
    </Stack>
  );
}
