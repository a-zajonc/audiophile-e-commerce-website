import { ProductDisplay } from "./ProductDisplay";
import styles from "./index.module.scss";
import * as React from "react";

export function ProductsConfirmation({ basket }: any) {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.box}>
      <div
        className={`${
          isActive === false ? styles.itemsBox : styles.itemsBoxActive
        }`}
      >
        {basket.map((item: any) => {
          return <ProductDisplay product={item} key={item.name} />;
        })}
      </div>
      <div className={styles.greyBackground}>
        <div className={styles.line} />
      </div>
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
