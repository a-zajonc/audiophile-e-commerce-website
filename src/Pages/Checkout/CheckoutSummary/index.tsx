import * as React from "react";
import { Button } from "../../../Components/button/button";
import { OrderConfirmation } from "../OrderConfirmation";
import { ItemsList } from "./ItemsList";
import styles from "./index.module.scss";
import Modal from "react-modal";
import { BasketContext } from "../../../context/basketContext";
import {
  useSumGrandTotal,
  useSumPrices,
  useSumWithTax,
} from "../../../Components/functions/sumPrices";
import { Stack } from "../../../Components/Stack";
import { Text } from "../../../Components/Text";
import { useMedia } from "../../../context/mediaContext";

const customStyles = {
  content: {
    width: "540px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { background: "rgba(0, 0, 0, 0.4)" },
};

const customStylesMobile = {
  content: {
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
  overlay: { background: "rgba(0, 0, 0, 0.4)" },
};

Modal.setAppElement("#root");

export function CheckoutSummary({ errors, option, order, setOrder }: any) {
  const { basket, setBasket } = React.useContext(BasketContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const total = useSumPrices(basket);
  const { isMobile } = useMedia();

  React.useEffect(() => {
    if (order) {
      openModal();
    }
  }, [order]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    setOrder(basket);
    if (order) {
      window.localStorage.removeItem("form");
    }
    setBasket([]);
    closeModal();
    window.localStorage.removeItem("basket");
  };
  if (order) {
    window.localStorage.removeItem("form");
  }

  return (
    <Stack orientation="vertical" gap="24px" className={styles.box}>
      <Text
        color="primary"
        fontSize="m"
        fontWeight={700}
        headingLevel={2}
        className={styles.header}
      >
        Summary
      </Text>
      {basket &&
        basket.map((item: any) => {
          return (
            <ItemsList
              name={item.name}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              key={item.name}
            />
          );
        })}
      <Stack orientation="vertical" className="uppercase" gap="32px">
        <Stack orientation="vertical" gap="8px">
          <Stack orientation="horizontal" spacing="between">
            <Text color="primary" fontSize="s" opacity="m">
              TOTAL
            </Text>
            <Text
              color="primary"
              fontSize="m"
              fontWeight={700}
            >{`$ ${total}`}</Text>
          </Stack>
          <Stack orientation="horizontal" spacing="between">
            <Text color="primary" fontSize="s" opacity="m">
              SHIPPING
            </Text>
            <Text color="primary" fontSize="m" fontWeight={700}>
              {basket && basket.length ? "$ 50" : "$ 0"}
            </Text>
          </Stack>
          <Stack orientation="horizontal" spacing="between">
            <Text color="primary" fontSize="s" opacity="m">
              VAT (INCLUDED)
            </Text>
            <Text
              color="primary"
              fontSize="m"
              fontWeight={700}
            >{`$ ${useSumWithTax(total, 0.2)}`}</Text>
          </Stack>
        </Stack>
        <Stack orientation="horizontal" spacing="between">
          <Text color="primary" fontSize="s" opacity="m">
            GRAND TOTAL
          </Text>
          <Text
            color="brand"
            fontWeight={700}
            fontSize="m"
          >{`$ ${useSumGrandTotal(total, 50)}`}</Text>
        </Stack>
      </Stack>
      <Button
        type="submit"
        aria-label="Submit"
        colorScheme="brand"
        fullWidth={true}
        disabled={
          !basket ||
          basket.length < 1 ||
          (errors && Object.keys(errors).length > 0)
        }
      >
        {option === "Cash on Delivery" ? "CONTINUE" : "CONTINUE & PAY"}
      </Button>
      <Modal
        style={isMobile ? customStylesMobile : customStyles}
        isOpen={modalIsOpen}
        closeTimeoutMS={500}
      >
        <OrderConfirmation handleClick={handleClick} />
      </Modal>
    </Stack>
  );
}
