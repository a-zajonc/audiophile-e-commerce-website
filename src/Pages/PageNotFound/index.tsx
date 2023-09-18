import styles from "./index.module.scss";
import warning from "../../images/warning.svg";
import { GoBackButton } from "../GoBackButton";

export function PageNotFound() {
  return (
    <div className={styles.box}>
      <GoBackButton />
      <img src={warning} alt="Warning Sign" className={styles.img} />
      <p>It seems there is no page like the one you're looking for.</p>
      <p>
        Please check the URL or go back to the{" "}
        <a href="/" className={styles.a}>
          homepage
        </a>
      </p>
    </div>
  );
}
