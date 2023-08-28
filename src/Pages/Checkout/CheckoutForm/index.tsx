import * as React from "react";
import { Input } from "../../../Components/input/input";
import { RadioInput } from "../../../Components/RadioInput";
import styles from "./index.module.scss";
import cashDelivery from "../../../images/checkout/icon-cash-on-delivery.svg";

export function CheckoutForm() {
  const [option, setOption] = React.useState("");

  return (
    <div className={styles.box}>
      <h3 className={styles.header}>Checkout</h3>
      <p className={styles.formTitle}>Billing Details</p>
      <div className={styles.inputsBox}>
        <Input title="Name"></Input>
        <Input title="Email Address"></Input>
      </div>
      <div className={styles.inputsBox}>
        <Input title="Phone Number" halfWidth={true}></Input>
      </div>
      <p className={styles.formTitle}>Shipping Details</p>
      <Input title="Address" />
      <div className={styles.inputsBox}>
        <Input title="ZIP Code" />
        <Input title="City" />
      </div>
      <div className={styles.inputsBox}>
        <Input title="Country" halfWidth={true} />
      </div>
      <p className={styles.formTitle}>Payment details</p>
      <div className={styles.paymentDetailsBox}>
        <p className={styles.text}>Payment Method</p>
        <div className={styles.radioInputBox}>
          <RadioInput
            title="e-Money"
            radioName="payment"
            setOption={setOption}
          />
          <RadioInput
            title="Cash on Delivery"
            radioName="payment"
            setOption={setOption}
          />
        </div>
      </div>
      {option.length < 1 ? null : option === "e-Money" ? (
        <div className={styles.radioInputsBox}>
          <Input title="e-Money Number" />
          <Input title="e-Money PIN" />
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
