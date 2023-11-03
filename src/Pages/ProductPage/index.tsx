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
import { useMedia } from "../../context/mediaContext";

type Product = {
  name: string;
  description: string;
  new: boolean;
  img: {
    desktop: string;
    imageProduct: string;
    tablet: string;
    mobile: string;
  };
  imgCart: string;
  price: string;
};

function getProductImageUrl(
  product: Product,
  isDesktop: boolean,
  isTablet: boolean,
  mode: string
) {
  if (isDesktop) {
    return product.img.desktop;
  } else if (!isDesktop && mode === "buy") {
    return product.img.imageProduct;
  } else if (isTablet) {
    return product.img.tablet;
  } else {
    return product.img.mobile;
  }
}

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
  const { isDesktop, isTablet, isMobile } = useMedia();
  const matchingProducts = findProductByKeyword(pathname);

  if (matchingProducts.length === 0) {
    return <PageNotFound />;
  }
  const product = matchingProducts[0];
  const imageUrl = getProductImageUrl(product, isDesktop, isTablet, "buy");

  return (
    <Stack
      orientation="vertical"
      className={styles.box}
      gap={isMobile ? "70px" : "120px"}
    >
      <GoBackButton />
      <Stack orientation="vertical" gap="120px">
        <ProductCard
          productName={product.name}
          productDescription={product.description}
          isProductNew={product.new}
          productImg={imageUrl}
          productCartImg={product.imgCart}
          productPrice={product.price}
          mode={"buy"}
        />
        <Stack orientation={isDesktop ? "horizontal" : "vertical"} gap="125px">
          <Features
            descriptionFirst={product.features?.[0]}
            descriptionSecond={product.features?.[1]}
          />
          <BoxContent insideBox={product.boxContent} />
        </Stack>
        <ProductGallery
          img={
            isMobile
              ? product.productGallery.mobile
              : isDesktop
              ? product.productGallery.desktop
              : product.productGallery.tablet
          }
        />
      </Stack>
      <OtherProducts />
      <Categories />
    </Stack>
  );
}
