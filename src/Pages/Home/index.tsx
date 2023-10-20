import styles from "./index.module.scss";
import { Header } from "./Header/";
import { Categories } from "./Categories";
import { ProductComponent } from "./ProductComponent";
import { Stack } from "../../Components/Stack";

export function Home() {
  return (
    <Stack orientation="vertical">
      <Header />
      <Stack orientation="vertical" className={styles.box}>
        <Categories />
        <ProductComponent />
      </Stack>
    </Stack>
  );
}
