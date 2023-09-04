import styles from "./index.module.css";

export function GoBackButton() {
  return (
    <div className={styles.goBackBox} onClick={() => window.history.back()}>
      Go Back
    </div>
  );
}
