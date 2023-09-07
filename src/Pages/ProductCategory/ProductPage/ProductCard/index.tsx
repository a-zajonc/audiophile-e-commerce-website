import styles from "./index.module.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { Counter } from "../../../../Components/Counter";
import { Button } from "../../../../Components/button/button";
import { useAddToBasket } from "../../../../Components/hooks and functions/useAddToBasket";
import { removeTypeFromName } from "../../../../Components/hooks and functions/removeTypeFromName";

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
};

export function ProductCard({
  productName,
  productDescription,
  productImg,
  productCartImg,
  isProductNew,
  productPrice,
  mode,
}: Props) {
  const addToBasket = useAddToBasket();
  const [buttonText, setButtonText] = React.useState("Add to cart");

  const handleAddToCartClick = () => {
    addToBasket(removeTypeFromName(productName), productCartImg, productPrice);

    setButtonText("Added!");
    setTimeout(() => {
      setButtonText("Add to cart");
    }, 2000);
  };

  return (
    <div className={styles.box}>
      <img
        className={styles.productImg}
        src={require(`../../../../images/${productImg}`)}
        alt="Headphones"
      />
      <div className={styles.textBox}>
        <p className={styles.textNewProduct}>
          {isProductNew === true ? "New Product" : null}
        </p>
        <h2 className={styles.productHeader}>{productName}</h2>
        <p className={styles.content}>{productDescription}</p>
        {mode === "buy" ? (
          <div>
            <p className={styles.textPrice}>{displayAsPrice(productPrice)}</p>
            <div className={styles.container}>
              <Counter size="big" margin={true} quantity={1} />
              <Button
                colorScheme="brand"
                margin={false}
                onClick={handleAddToCartClick}
                disabled={buttonText === "Added!"}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        ) : (
          <Link
            to={`/product/${productName.split(" ").join("-").toLowerCase()}`}
          >
            <Button colorScheme="brand" margin={true}>
              See Product
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
