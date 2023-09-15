import styles from "./index.module.scss";
import * as React from "react";
import { GoBackButton } from "../GoBackButton";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutSummary } from "./CheckoutSummary";
import { useForm } from "react-hook-form";

export function Checkout() {
  const [order, setOrder] = React.useState("");
  const [option, setOption] = React.useState("e-Money");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setOrder(data);
  };

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
          <CheckoutSummary errors={errors} option={option} />
        </div>
      </form>
    </div>
  );
}
