import * as React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Counter } from "../../../../Components/Counter";
import { Button } from "../../../../Components/button/button";
import { useAddToBasket } from "../../../../Components/functions/useAddToBasket";
import { removeTypeFromName } from "../../../../Components/functions/removeTypeFromName";
import { Text } from "../../../../Components/Text";
import { Stack } from "../../../../Components/Stack";
import { NewProduct } from "../../../../Components/NewProduct";
import { useMedia } from "../../../../context/mediaContext";

function displayAsPrice(price: any) {
  const addComma = Number(price).toLocaleString("en-US");
  return `$ ${addComma}`;
}

type Props = {
  productName: string;
  productDescription: string;
  productImg: string;
  productCartImg?: string;
  isProductNew: boolean;
  productPrice?: string;
  mode: string;
  isReversed?: boolean;
};

export function ProductCard({
  productName,
  productDescription,
  productImg,
  productCartImg,
  isProductNew,
  productPrice,
  mode,
  isReversed,
}: Props) {
  const addToBasket = useAddToBasket();
  const [buttonText, setButtonText] = React.useState("Add to cart");
  const [quantity, setQuantity] = React.useState(1);
  const { isDesktop } = useMedia();

  const handleAddToCartClick = () => {
    addToBasket(
      removeTypeFromName(productName),
      productCartImg,
      productPrice,
      quantity
    );

    setButtonText("Added!");
    setTimeout(() => {
      setButtonText("Add to cart");
    }, 2000);
  };

  return (
    <Stack
      orientation={isDesktop || mode === "buy" ? "horizontal" : "vertical"}
      spacing="between"
      gap="20px"
      className={
        isDesktop
          ? `${styles.box} ${isReversed ? `${styles["box-reversed"]}` : ""}`
          : styles.box
      }
    >
      <img
        className={mode === "buy" ? styles.productImg : styles.img}
        src={require(`../../../../images/${productImg}`)}
        alt="Headphones"
      />
      <Stack
        orientation="vertical"
        spacing="center"
        className={styles.text}
        gap="32px"
      >
        {isProductNew ? <NewProduct color="brand" /> : null}
        <Text
          color="primary"
          fontSize="xxl"
          fontWeight={700}
          lineHeight="l"
          headingLevel={2}
          className={styles.header}
        >
          {productName}
        </Text>
        <Text color="primary" fontSize="s" lineHeight="s" opacity="m">
          {productDescription}
        </Text>
        {mode === "buy" ? (
          <Stack orientation="vertical" gap="47px">
            <Text
              color="primary"
              fontSize="m"
              fontWeight={700}
              className={styles.textPrice}
            >
              {displayAsPrice(productPrice)}
            </Text>
            <Stack className={styles.marginTop}>
              <Counter
                size="big"
                margin={true}
                quantity={quantity}
                onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
              />
              <Button
                colorScheme="brand"
                onClick={handleAddToCartClick}
                disabled={buttonText === "Added!"}
              >
                {buttonText}
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Link
            to={`/product/${productName.split(" ").join("-").toLowerCase()}`}
          >
            <Button colorScheme="brand">See Product</Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
}
