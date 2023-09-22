import * as React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../../images/shared/desktop/icon-cart.svg";
import Modal from "react-modal";
import { CartModal } from "../CartModal";

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
    <div className={styles.boxProduct}>
      <div className={styles.content}>
        <Link to="/">
          <img src={logo} alt="Shop Logo" className={styles.logo} />
        </Link>
        <div className={styles.categories}>
          <Link to="/">
            <div className={styles.category}>Home</div>
          </Link>
          <Link to="/category/headphones">
            <div className={styles.category}>Headphones</div>
          </Link>
          <Link to="/category/speakers">
            <div className={styles.category}>Speakers</div>
          </Link>
          <Link to="/category/earphones">
            <div className={styles.category}>Earphones</div>
          </Link>
        </div>
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
      </div>
      <div className={styles.divider} />
    </div>
  );
}
