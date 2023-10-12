import * as React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../../images/shared/desktop/icon-cart.svg";
import Modal from "react-modal";
import { CartModal } from "../CartModal";
import { Stack } from "../../Components/Stack";
import { Text } from "../../Components/Text";
import { SiteNavigation } from "./SiteNavigation";

const customStyles = {
  content: {
    padding: "31px",
    width: "377px",
    top: "15%",
    left: "55%",
    right: "auto",
    bottom: "auto",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement(document.getElementById("root") as HTMLElement);

export function NavBar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Stack orientation="vertical" className={styles.box}>
      <Stack
        orientation="horizontal"
        spacing="between"
        className={styles.content}
      >
        <Link to="/">
          <img src={logo} alt="Shop Logo" className={styles.logo} />
        </Link>
        <SiteNavigation />
        <button className={styles.displayNone}>
          <Cart className={styles.cartIcon} onClick={openModal} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
        >
          <CartModal handleClick={closeModal} />
        </Modal>
      </Stack>
      <div className={styles.divider} />
    </Stack>
  );
}
