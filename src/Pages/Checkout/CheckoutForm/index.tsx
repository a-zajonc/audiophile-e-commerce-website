import * as React from "react";
import { Input } from "../../../Components/input/input";
import { RadioInput } from "../../../Components/RadioInput";
import styles from "./index.module.scss";
import cashDelivery from "../../../images/checkout/icon-cash-on-delivery.svg";
import { Controller } from "react-hook-form";

export function CheckoutForm({
  errors,
  control,
  register,
  option,
  setOption,
}: any) {
  return (
    <div className={styles.box}>
      <h3 className={styles.header}>Checkout</h3>
      <p className={styles.formTitle}>Billing Details</p>
      <div className={styles.inputsBox}>
        <Controller
          name="userName"
          control={control}
          defaultValue=""
          rules={{
            required: "This is required.",
          }}
          render={({ field }) => (
            <Input title="Name" {...field} errors={errors} />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            pattern: { value: /^\S+@\S+$/i, message: "Wrong format" },
            required: "This is required.",
          }}
          render={({ field }) => (
            <Input title="Email Address" errors={errors} {...field} />
          )}
        />
      </div>
      <div className={styles.inputsBox}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: "This is required.",
          }}
          render={({ field }) => (
            <Input
              title="Phone Number"
              type="number"
              halfWidth={true}
              errors={errors}
              {...field}
            />
          )}
        />
      </div>
      <p className={styles.formTitle}>Shipping Details</p>
      <Controller
        rules={{
          required: "Fill your address",
        }}
        name="address"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input title="Address" {...field} errors={errors} />
        )}
      />
      <div className={styles.inputsBox}>
        <Controller
          rules={{
            required: "Fill your ZIP Code",
          }}
          name="zipcode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input title="ZIP Code" type="number" {...field} errors={errors} />
          )}
        />
        <Controller
          rules={{
            required: "Fill city name",
          }}
          name="city"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input title="City" {...field} errors={errors} />
          )}
        />
      </div>
      <div className={styles.inputsBox}>
        <Controller
          rules={{
            required: "Fill country name",
          }}
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              title="Country"
              halfWidth={true}
              {...field}
              errors={errors}
            />
          )}
        />
      </div>
      <p className={styles.formTitle}>Payment details</p>
      <div className={styles.paymentDetailsBox}>
        <p className={styles.text}>Payment Method</p>
        <div className={styles.radioInputBox}>
          <RadioInput
            {...register("payment", { required: "This is required." })}
            title="e-Money"
            radioName="payment"
            setOption={setOption}
            value="card"
            checked={!option || option === "e-Money"}
          />

          <RadioInput
            {...register("payment", { required: "This is required." })}
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
            rules={{
              required: "Enter card name",
            }}
            name="cardNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                title="e-Money Number"
                type="number"
                errors={errors}
                {...field}
              />
            )}
          />
          <Controller
            rules={{
              required: "Enter PIN number",
            }}
            name="pinNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input title="e-Money PIN" errors={errors} {...field} />
            )}
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
    </div>
  );
}
