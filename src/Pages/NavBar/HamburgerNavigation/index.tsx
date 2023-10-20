import styles from "./index.module.scss";
import { ReactComponent as Icon } from "../../../images/shared/tablet/icon-hamburger.svg";

export function HamburgerNavigation() {
  return (
    <div>
      <Icon className={styles.icon} />
    </div>
  );
}
