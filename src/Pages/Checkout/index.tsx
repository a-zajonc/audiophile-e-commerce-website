import styles from "./index.module.scss";
import * as React from "react";
import { GoBackButton } from "../GoBackButton";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

export function Checkout() {
  const [order, setOrder] = React.useState("");

  const [option, setOption] = React.useState("e-Money");

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setOrder(data);
  };

  useFormPersist("form", {
    watch,
    setValue,
    storage: window.sessionStorage,
  });

  return (
    <div className={styles.box}>
      <GoBackButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <CheckoutForm
            errors={errors}
            control={control}
            register={register}
            option={option}
            setOption={setOption}
          />
          <CheckoutSummary errors={errors} option={option} order={order} />
        </div>
      </form>
    </div>
  );
}
