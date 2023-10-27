import styles from "./index.module.scss";
import * as React from "react";
import { ReactComponent as Icon } from "../../../images/shared/tablet/icon-hamburger.svg";
import Modal from "react-modal";
import { Categories } from "../../Home/Categories";
import { useLocation } from "react-router-dom";

const customStyles = {
  content: {
    inset: "0px auto auto 0px",
    padding: "0px 0 31px 0",
    width: "100%",
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
    top: "95px",
  },
};

export function HamburgerNavigation() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    closeModal();
  }, [location]);

  return (
    <div>
      <Icon
        className={styles.icon}
        onClick={modalIsOpen ? closeModal : openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS={500}
        style={customStyles}
      >
        <div className={styles.box}>
          <Categories />
        </div>
      </Modal>
    </div>
  );
}
