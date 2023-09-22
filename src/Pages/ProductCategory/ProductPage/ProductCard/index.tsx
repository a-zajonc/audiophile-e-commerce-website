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
      orientation="horizontal"
      spacing="between"
      className={`${styles.box} ${
        isReversed ? `${styles["box-reversed"]}` : ""
      }`}
    >
      <img
        className={styles.productImg}
        src={require(`../../../../images/${productImg}`)}
        alt="Headphones"
      />
      <Stack orientation="vertical" spacing="center" className={styles.textBox}>
        {isProductNew ? <NewProduct color="brand" /> : null}
        <Text
          color="primary"
          fontSize="xxl"
          fontWeight={700}
          lineHeight="l"
          headingLevel={2}
          marginTop="16px"
          className={styles.header}
        >
          {productName}
        </Text>
        <Text
          color="primary"
          fontSize="s"
          lineHeight="s"
          opacity="m"
          marginTop="32px"
          marginBottom="32px"
        >
          {productDescription}
        </Text>
        {mode === "buy" ? (
          <Stack orientation="vertical">
            <Text
              color="primary"
              fontSize="m"
              fontWeight={700}
              marginTop="32px"
              className={styles.textPrice}
            >
              {displayAsPrice(productPrice)}
            </Text>
            <Stack className={styles.marginTop}>
              <Counter
                size="big"
                margin={true}
                quantity={quantity}
                setQuantity={setQuantity}
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
