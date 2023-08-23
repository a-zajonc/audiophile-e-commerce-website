import styles from "./index.module.css";

type FeaturesProps = { descriptionFirst?: string; descriptionSecond?: string };

export function Features({
  descriptionFirst,
  descriptionSecond,
}: FeaturesProps) {
  return (
    <div className={styles.box}>
      <h3 className={styles.header}>Features</h3>
      <p className={styles.text}>{descriptionFirst}</p>
      <p className={styles.text}>{descriptionSecond}</p>
    </div>
  );
}
