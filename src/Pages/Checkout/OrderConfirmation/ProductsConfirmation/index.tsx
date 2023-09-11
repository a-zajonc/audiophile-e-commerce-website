import { ProductDisplay } from "./ProductDisplay";
import styles from "./index.module.scss";
import * as React from "react";

export function ProductsConfirmation({ basket }: any) {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.itemsBox}>
      {isActive === true ? (
        basket.map((item: any) => {
          return <ProductDisplay product={item} key={item.id} />;
        })
      ) : (
        <ProductDisplay product={basket[0]} />
      )}
      <div className={styles.line} />
      {basket.length > 1 ? (
        <button className={styles.buttonText} onClick={handleClick}>
          {isActive
            ? "View less"
            : `and ${basket.length - 1} other item${
                basket.length > 2 ? "s" : ""
              }`}
        </button>
      ) : null}
    </div>
  );
}
