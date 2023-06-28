import styles from "./index.module.css";
import headphones from "../../../../images/shared/desktop/image-xx99-mark-two-headphones.jpg";

type ProductCardProps = {
  productName: string;
  productDescription: string;
  productImg: string;
  isProductNew: boolean;
};

export function ProductCard({
  productName,
  productDescription,
  productImg,
  isProductNew,
}: ProductCardProps) {
  return (
    <div className={styles.box}>
      <div className={styles.imgBackground}>
        <img
          className={styles.productImg}
          src={require(`../../../../images/${productImg}`)}
          alt="Headphones"
        />
      </div>
      <div className={styles.textBox}>
        <p className={styles.textNewProduct}>
          {isProductNew === true ? "New Product" : null}
        </p>
        <h2 className={styles.productHeader}>{productName}</h2>
        <p className={styles.content}>{productDescription}</p>
        <button className={styles.buttonProduct}>See Product</button>
      </div>
    </div>
  );
}
