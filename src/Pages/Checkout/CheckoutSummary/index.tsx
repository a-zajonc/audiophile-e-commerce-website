import * as React from "react";
import { Button } from "../../../Components/button/button";
import { OrderConfirmation } from "../OrderConfirmation";
import { ItemsList } from "./ItemsList";
import styles from "./index.module.scss";
import Modal from "react-modal";
import { BasketContext } from "../../../context";
import {
  useSumGrandTotal,
  useSumPrices,
  useSumWithTax,
} from "../../../Components/functions/sumPrices";

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
Modal.setAppElement("#root");

export function CheckoutSummary({ errors, option, order }: any) {
  const { basket, setBasket } = React.useContext(BasketContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const total = useSumPrices(basket);

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
    setBasket([]);
    closeModal();
    window.sessionStorage.removeItem("form");
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Summary</h2>
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
      <div className={styles.container}>
        <div className={styles.costsBox}>
          <div className={styles.textBox}>
            <p className={styles.text}>Total</p>
            <p className={styles.price}>{`$ ${total}`}</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>SHIPPING</p>
            <p className={styles.price}>
              {basket && basket.length ? "$ 50" : "$ 0"}
            </p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>VAT (INCLUDED)</p>
            <p className={styles.price}>{`$ ${useSumWithTax(total, 0.2)}`}</p>
          </div>
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>GRAND TOTAL</p>
          <p className={styles.total}>{`$ ${useSumGrandTotal(total, 50)}`}</p>
        </div>
      </div>
      <Button
        type="submit"
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
      <Modal style={customStyles} isOpen={modalIsOpen}>
        <OrderConfirmation handleClick={handleClick} />
      </Modal>
    </div>
  );
}
