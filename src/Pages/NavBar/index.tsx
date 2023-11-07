import * as React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import logo from "../../images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../../images/shared/desktop/icon-cart.svg";
import Modal from "react-modal";
import { CartModal } from "../CartModal";
import { Stack } from "../../Components/Stack";
import { SiteNavigation } from "./SiteNavigation";
import { useMedia } from "../../context/mediaContext";
import { HamburgerNavigation } from "./HamburgerNavigation";

const customStylesDektop = {
  content: {
    padding: "31px",
    width: "377px",
    top: "15%",
    left: "58%",
    right: "auto",
    bottom: "auto",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

const customStylesTablet = {
  content: {
    padding: "31px",
    width: "277px",
    top: "10%",
    left: "52%",
    right: "auto",
    bottom: "auto",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

const customStylesMobile = {
  content: {
    padding: "31px",
    width: "100%",
    top: "10%",
    left: "0%",
    right: "0%",
    bottom: "auto",
    boxSizing: "border-box",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

function ModalStyle() {
  const { isDesktop, isMobile } = useMedia();
  if (isMobile) {
    return customStylesMobile;
  }
  if (isDesktop) {
    return customStylesDektop;
  } else {
    return customStylesTablet;
  }
}

Modal.setAppElement(document.getElementById("root") as HTMLElement);

export function NavBar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { isTablet, isMobile, isDesktop } = useMedia();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Stack orientation="vertical" className={styles.box} spacing="between">
      <Stack
        orientation="horizontal"
        spacing="between"
        className={styles.content}
      >
        {isMobile ? (
          <>
            <HamburgerNavigation />
            <Link to="/">
              <img src={logo} alt="Shop Logo" className={styles.logo} />
            </Link>
          </>
        ) : null}
        {isTablet ? (
          <Stack gap="42px">
            <HamburgerNavigation />
            <Link to="/">
              <img src={logo} alt="Shop Logo" className={styles.logo} />
            </Link>
          </Stack>
        ) : null}
        {isDesktop ? (
          <>
            <Link to="/">
              <img src={logo} alt="Shop Logo" className={styles.logo} />
            </Link>
            <SiteNavigation />
          </>
        ) : null}
        <button className={styles.displayNone} aria-label="Cart">
          <Cart className={styles.cartIcon} onClick={openModal} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle()}
          onRequestClose={closeModal}
          closeTimeoutMS={500}
        >
          <CartModal handleClick={closeModal} />
        </Modal>
      </Stack>
      <div className={styles.divider} />
    </Stack>
  );
}
