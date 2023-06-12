import styles from "./index.module.css";
import { BigProductComponent } from "./BigProductComponent";
import { MediumProductComponent } from "./MediumProductComponent";
import { SmallProductComponent } from "./SmallProductComponent";

export function ProductComponent() {
  return (
    <div className={styles.box}>
      <BigProductComponent />
      <MediumProductComponent />
      <SmallProductComponent />
    </div>
  );
}
