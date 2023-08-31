import styles from "./index.module.css";

type Prop = {
  category: string | any;
};

export function CategoryHeader({ category }: Prop) {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>{category}</h2>
    </div>
  );
}
