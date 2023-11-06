import { Input } from "../../../Components/input/input";
import { RadioInput } from "../../../Components/RadioInput";
import styles from "./index.module.scss";
import cashDelivery from "../../../images/checkout/icon-cash-on-delivery.svg";
import { Controller } from "react-hook-form";
import { Text } from "../../../Components/Text";
import { Stack } from "../../../Components/Stack";
import { motion } from "framer-motion";
import { useMedia } from "../../../context/mediaContext";

export function CheckoutForm({
  errors,
  control,
  register,
  option,
  setOption,
}: any) {
  const { isMobile } = useMedia();

  return (
    <Stack orientation="vertical" className={styles.box} gap="40px">
      <Text
        color="primary"
        fontSize="xl"
        fontWeight={700}
        lineHeight="m"
        headingLevel={3}
        className={styles.header}
      >
        Checkout
      </Text>
      <Stack orientation="vertical" gap="16px">
        <Text
          color="brand"
          fontSize="xxs"
          fontWeight={700}
          className={styles.textTransform}
        >
          Billing Details
        </Text>
        <Stack
          orientation={isMobile ? "vertical" : "horizontal"}
          spacing="between"
          align={isMobile ? "normal" : "center"}
          gap={isMobile ? "16px" : "0px"}
        >
          <Controller
            name="userName"
            control={control}
            defaultValue=""
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input title="Name" id="username" {...field} errors={errors} />
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
              <Input
                title="Email Address"
                id="email"
                errors={errors}
                {...field}
              />
            )}
          />
        </Stack>
        <Stack orientation="horizontal" align="center" spacing="between">
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
                id="phone"
                halfWidth={isMobile ? false : true}
                errors={errors}
                {...field}
              />
            )}
          />
        </Stack>
      </Stack>
      <Stack orientation="vertical" gap="16px">
        <Text
          color="brand"
          fontSize="xxs"
          fontWeight={700}
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
            <Input title="Address" id="address" {...field} errors={errors} />
          )}
        />
        <Stack
          orientation={isMobile ? "vertical" : "horizontal"}
          align={isMobile ? "normal" : "center"}
          spacing="between"
          gap={isMobile ? "16px" : "0px"}
        >
          <Controller
            rules={{
              required: "Fill your ZIP Code",
            }}
            name="zipcode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                title="ZIP Code"
                type="number"
                id="zip code"
                {...field}
                errors={errors}
              />
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
              <Input title="City" id="city" {...field} errors={errors} />
            )}
          />
        </Stack>
        <Stack orientation="horizontal" align="center" spacing="between">
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
                id="country"
                halfWidth={isMobile ? false : true}
                {...field}
                errors={errors}
              />
            )}
          />
        </Stack>
      </Stack>
      <Stack orientation="vertical" gap="16px">
        <Text
          color="brand"
          fontSize="xxs"
          fontWeight={700}
          className={styles.textTransform}
        >
          Payment details
        </Text>
        <Stack orientation={isMobile ? "vertical" : "horizontal"} gap="16px">
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
      </Stack>
      {option.length < 1 ? null : option === "e-Money" ? (
        <motion.div
          key="e-Money"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack
            orientation={isMobile ? "vertical" : "horizontal"}
            spacing="between"
            align={isMobile ? "normal" : "center"}
            gap={isMobile ? "16px" : "0px"}
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
                  id="e-money"
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
                <Input
                  title="e-Money PIN"
                  id="pin"
                  errors={errors}
                  {...field}
                />
              )}
            />
          </Stack>
        </motion.div>
      ) : (
        <motion.div
          key="CashOnDelivery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack orientation="horizontal" align="center" spacing="between">
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
        </motion.div>
      )}
    </Stack>
  );
}
