import styles from "./index.module.scss";
import { BigProductComponent } from "./BigProductComponent";
import { MediumProductComponent } from "./MediumProductComponent";
import { SmallProductComponent } from "./SmallProductComponent";
import { Stack } from "../../../Components/Stack";

export function ProductComponent() {
  return (
    <Stack orientation="vertical" gap="50px" className={styles.marginTop}>
      <BigProductComponent />
      <MediumProductComponent />
      <SmallProductComponent />
    </Stack>
  );
}
