import styles from "./index.module.scss";

export function ProductDisplay(product: any) {
  return (
    <div className={styles.boxHorizontal}>
      <img
        src={require(`../../../../../images/cart/${product.product.img}`)}
        alt="Item Icon"
        className={styles.itemImg}
      />
      <div className={styles.boxHorizontalSpace}>
        <div className={styles.boxVertical}>
          <p className={styles.itemName}>{product.product.name}</p>
          <p className={styles.itemPrice}>{`$ ${product.product.price}`}</p>
        </div>
        <p className={styles.itemQuantity}>{`x ${product.product.quantity}`}</p>
      </div>
    </div>
  );
}
