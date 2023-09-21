import styles from "./index.module.scss";
import * as React from "react";
import { ProductDisplay } from "./ProductDisplay";
import { Stack } from "../../../../Components/Stack";

export function ProductsConfirmation({ basket }: any) {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack orientation="vertical" className={styles.box}>
      <Stack
        orientation="vertical"
        className={`${
          isActive === false ? styles.itemsBox : styles.itemsBoxActive
        }`}
      >
        {basket.map((item: any) => {
          return <ProductDisplay product={item} key={item.name} />;
        })}
      </Stack>
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
    </Stack>
  );
}
