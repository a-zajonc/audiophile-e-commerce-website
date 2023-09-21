import { Input } from "../../../Components/input/input";
import { RadioInput } from "../../../Components/RadioInput";
import styles from "./index.module.scss";
import cashDelivery from "../../../images/checkout/icon-cash-on-delivery.svg";
import { Controller } from "react-hook-form";
import { Text } from "../../../Components/Text";
import { Stack } from "../../../Components/Stack";

export function CheckoutForm({
  errors,
  control,
  register,
  option,
  setOption,
}: any) {
  return (
    <div className={styles.box}>
      <Text
        color="primary"
        fontSize="xl"
        fontWeight={700}
        lineHeight="m"
        headingLevel={3}
        marginTop="25px"
        className={styles.header}
      >
        Checkout
      </Text>
      <Text
        color="brand"
        fontSize="xxs"
        fontWeight={700}
        marginTop="50px"
        className={styles.textTransform}
      >
        Billing Details
      </Text>
      <Stack
        orientation="horizontal"
        spacing="between"
        align="center"
        marginTop="24px"
      >
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
      </Stack>
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        marginTop="24px"
      >
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
      </Stack>
      <Text
        color="brand"
        fontSize="xxs"
        fontWeight={700}
        marginTop="50px"
        className={styles.textTransform}
      >
        Shipping Details
      </Text>
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
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        marginTop="24px"
      >
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
      </Stack>
      <Stack
        orientation="horizontal"
        align="center"
        spacing="between"
        marginTop="24px"
      >
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
      </Stack>
      <Text
        color="brand"
        fontSize="xxs"
        fontWeight={700}
        marginTop="50px"
        className={styles.textTransform}
      >
        Payment details
      </Text>
      <Stack orientation="horizontal">
        <Text
          color="primary"
          fontSize="xxs"
          fontWeight={700}
          className={styles.text}
        >
          Payment Method
        </Text>
        <Stack
          orientation="vertical"
          spacing="around"
          className={styles.fullWidth}
        >
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
        </Stack>
      </Stack>
      {option.length < 1 ? null : option === "e-Money" ? (
        <Stack
          orientation="horizontal"
          spacing="between"
          align="center"
          marginTop="24px"
        >
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
        </Stack>
      ) : (
        <Stack
          orientation="horizontal"
          align="center"
          spacing="between"
          marginTop="24px"
          className={styles.marginBottom}
        >
          <img
            src={cashDelivery}
            alt="Cash on delivery icon"
            className={styles.icon}
          />
          <Text
            color="primary"
            fontSize="s"
            opacity="m"
            className={styles.padding}
          >
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </Text>
        </Stack>
      )}
    </div>
  );
}
