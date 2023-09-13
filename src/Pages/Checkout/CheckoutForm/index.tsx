import * as React from "react";
import { Input } from "../../../Components/input/input";
import { RadioInput } from "../../../Components/RadioInput";
import styles from "./index.module.scss";
import cashDelivery from "../../../images/checkout/icon-cash-on-delivery.svg";
import { useForm, Controller } from "react-hook-form";

export function CheckoutForm() {
  const [option, setOption] = React.useState("");
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.header}>Checkout</h3>
        <p className={styles.formTitle}>Billing Details</p>
        <div className={styles.inputsBox}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input title="Name" {...field} />}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <Input title="Email Address" {...field} />}
          />
        </div>
        <div className={styles.inputsBox}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input title="Phone Number" halfWidth={true} {...field} />
            )}
          />
        </div>
        <p className={styles.formTitle}>Shipping Details</p>
        <Controller
          name="adress"
          control={control}
          defaultValue=""
          render={({ field }) => <Input title="Address" {...field} />}
        />
        <div className={styles.inputsBox}>
          <Controller
            name="zipcode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input type="number" title="ZIP Code" {...field} />
            )}
          />
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => <Input title="City" {...field} />}
          />
        </div>
        <div className={styles.inputsBox}>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input title="Country" halfWidth={true} {...field} />
            )}
          />
        </div>
        <p className={styles.formTitle}>Payment details</p>
        <div className={styles.paymentDetailsBox}>
          <p className={styles.text}>Payment Method</p>
          <div className={styles.radioInputBox}>
            <RadioInput
              {...register("Payment", { required: true })}
              title="e-Money"
              radioName="payment"
              setOption={setOption}
              value="card"
            />

            <RadioInput
              {...register("Payment", { required: true })}
              title="Cash on Delivery"
              radioName="payment"
              setOption={setOption}
              value="cash"
            />
          </div>
        </div>
        {option.length < 1 ? null : option === "e-Money" ? (
          <div className={styles.radioInputsBox}>
            <Controller
              name="cardNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input title="e-Money Number" type="number" {...field} />
              )}
            />
            <Controller
              name="pinNumber"
              control={control}
              defaultValue=""
              render={({ field }) => <Input title="e-Money PIN" {...field} />}
            />
          </div>
        ) : (
          <div className={styles.inputsBox}>
            <img
              src={cashDelivery}
              alt="Cash on delivery icon"
              className={styles.icon}
            />
            <p className={styles.details}>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
        <button type="submit" />
      </form>
    </div>
  );
}
