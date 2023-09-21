import { Stack } from "../../Components/Stack";
import { Categories } from "../Home/Categories";
import { CategoryHeader } from "./Header";
import { ProductPage } from "./ProductPage";
import { useParams } from "react-router-dom";

export function ProductCategory() {
  const { categoryName } = useParams();

  return (
    <Stack orientation="vertical">
      <CategoryHeader category={categoryName} />
      <ProductPage />
      <Categories />
    </Stack>
  );
}
