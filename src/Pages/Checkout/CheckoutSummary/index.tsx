import * as React from "react";
import { Button } from "../../../Components/button/button";
import { OrderConfirmation } from "../OrderConfirmation";
import { ItemsList } from "./ItemsList";
import styles from "./index.module.scss";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "540px",
    height: "581px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { background: "rgba(0, 0, 0, 0.4)" },
};

Modal.setAppElement(document.getElementById("root") as HTMLElement);

export function CheckoutSummary() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Summary</h2>
      <ItemsList />
      <div className={styles.container}>
        <div className={styles.costsBox}>
          <div className={styles.textBox}>
            <p className={styles.text}>Total</p>
            <p className={styles.price}>$ 5,396</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>SHIPPING</p>
            <p className={styles.price}>$ 50</p>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>VAT (INCLUDED)</p>
            <p className={styles.price}>$ 1,079</p>
          </div>
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>GRAND TOTAL</p>
          <p className={styles.total}>$ 5,446</p>
        </div>
      </div>
      <Button colorScheme="brand" fullWidth={true} onClick={openModal}>
        CONTINUE & PAY
      </Button>
      <Modal style={customStyles} isOpen={modalIsOpen}>
        <OrderConfirmation handleClick={closeModal} />
      </Modal>
    </div>
  );
}
