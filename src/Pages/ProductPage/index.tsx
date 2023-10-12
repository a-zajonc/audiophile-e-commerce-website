import styles from "./index.module.scss";
import { ProductCard } from "../ProductCategory/CategoryPage/ProductCard";
import data from "../../data.json";
import { Features } from "./Features";
import { BoxContent } from "./BoxContent";
import { Categories } from "../Home/Categories";
import { ProductGallery } from "./ProductGallery";
import { OtherProducts } from "./OtherProducts";
import { GoBackButton } from "../GoBackButton";
import { useLocation } from "react-router-dom";
import { PageNotFound } from "../PageNotFound";
import { Stack } from "../../Components/Stack";

function findProductByKeyword(keyword: string) {
  const products = Object.values(data.products);

  const matchingProducts = [];

  for (const productCategory of products) {
    for (const product of productCategory) {
      if (
        product.name &&
        product.name.toLowerCase().includes(keyword.toLowerCase())
      ) {
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

  if (matchingProducts.length === 0) {
    return <PageNotFound />;
  }
  const product = matchingProducts[0];

  return (
    <Stack orientation="vertical" className={styles.box} gap="56px">
      <GoBackButton />
      <Stack orientation="vertical" gap="160px">
        <ProductCard
          productName={product.name}
          productDescription={product.description}
          isProductNew={product.new}
          productImg={product.img}
          productCartImg={product.imgCart}
          productPrice={product.price}
          mode={"buy"}
        />
        <Stack orientation="horizontal" gap="125px">
          <Features
            descriptionFirst={product.features?.[0]}
            descriptionSecond={product.features?.[1]}
          />
          <BoxContent insideBox={product.boxContent} />
        </Stack>
        <ProductGallery img={product.productGallery} />
      </Stack>
      <OtherProducts />
      <Categories />
    </Stack>
  );
}
