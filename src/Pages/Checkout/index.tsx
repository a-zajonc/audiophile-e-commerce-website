import styles from "./index.module.scss";
import * as React from "react";
import { GoBackButton } from "../GoBackButton";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Stack } from "../../Components/Stack";
import { useMedia } from "../../context/mediaContext";

export function Checkout() {
  const [order, setOrder] = React.useState("");
  const [option, setOption] = React.useState("e-Money");
  const { isDesktop } = useMedia();

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setOrder(data);
  };

  useFormPersist("form", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  return (
    <Stack orientation="vertical" className={styles.box} gap="70px">
      <GoBackButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          orientation={isDesktop ? "horizontal" : "vertical"}
          spacing="between"
          gap="30px"
        >
          <CheckoutForm
            errors={errors}
            control={control}
            register={register}
            option={option}
            setOption={setOption}
            clearErrors={clearErrors}
          />
          <CheckoutSummary
            errors={errors}
            option={option}
            order={order}
            setOrder={setOrder}
          />
        </Stack>
      </form>
    </Stack>
  );
}
