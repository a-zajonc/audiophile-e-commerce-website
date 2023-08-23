import { Button } from "../../../../Components/button/button";
import styles from "./index.module.css";

type ProductCardProps = {
  productName: string;
  productDescription: string;
  productImg: string;
  isProductNew: boolean;
  mode: string;
};

export function ProductCard({
  productName,
  productDescription,
  productImg,
  isProductNew,
  mode,
}: ProductCardProps) {
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
            <p className={styles.textPrice}>$ 2,999</p>
            <div className={styles.shoppingBox}>
              <div className={styles.boxNumber}>
                <p className={styles.mathSign}>-</p>
                <p>1</p>
                <p className={styles.mathSign}>+</p>
              </div>
              <Button colorScheme="brand" margin={false}>
                Add to cart
              </Button>
            </div>
          </div>
        ) : (
          <Button colorScheme="brand" margin={true}>
            See Product
          </Button>
        )}
      </div>
    </div>
  );
}
