import styles from "./index.module.scss";

export function GoBackButton() {
  return (
    <div className={styles.goBackBox} onClick={() => window.history.back()}>
      Go Back
    </div>
  );
}
