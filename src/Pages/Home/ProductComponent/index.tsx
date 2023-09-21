import { BigProductComponent } from "./BigProductComponent";
import { MediumProductComponent } from "./MediumProductComponent";
import { SmallProductComponent } from "./SmallProductComponent";
import { Stack } from "../../../Components/Stack";

export function ProductComponent() {
  return (
    <Stack orientation="vertical">
      <BigProductComponent />
      <MediumProductComponent />
      <SmallProductComponent />
    </Stack>
  );
}
