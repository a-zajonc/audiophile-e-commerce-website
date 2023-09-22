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
    <Stack orientation="vertical">
      {categoryName && Object.keys(data.products).includes(categoryName) ? (
        <>
          <CategoryHeader category={categoryName} />
          <CategoryPage />
          <Categories />
        </>
      ) : (
        <PageNotFound />
      )}
    </Stack>
  );
}
