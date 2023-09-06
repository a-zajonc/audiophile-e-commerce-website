import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Counter } from "../../../../Components/Counter";
import { Button } from "../../../../Components/button/button";
import { useContext } from "react";
import { BasketContext } from "../../../../context";
import { useAddToBasket } from "../../../../Components/hooks and functions/useAddToBasket";

function removeTypeFromName(name: string): string {
  const words = name.split(" ");

  const wordsToRemove = ["Earphones", "Wireless", "Headphones", "Speaker"];

  while (words.length > 0) {
    const lastWord = words[words.length - 1];
    if (wordsToRemove.includes(lastWord)) {
      words.pop();
    } else {
      break;
    }
  }
  const result = words.join(" ");

  return result;
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
  const { basket } = useContext(BasketContext);
  const addToBasket = useAddToBasket();

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
            <p className={styles.textPrice}>{productPrice}</p>
            <div className={styles.container}>
              <Counter size="big" margin={true} />
              <Button
                colorScheme="brand"
                margin={false}
                onClick={() => {
                  addToBasket(
                    removeTypeFromName(productName),
                    productCartImg,
                    productPrice
                  );
                }}
              >
                Add to cart
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
