import { Header } from "./Header/";
import { Categories } from "./Categories";
import { ProductComponent } from "./ProductComponent";

export function Home() {
  return (
    <>
      <Header />
      <Categories />
      <ProductComponent />
    </>
  );
}
