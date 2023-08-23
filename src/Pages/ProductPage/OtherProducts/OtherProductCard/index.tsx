import styles from "./index.module.css";

type OtherProductCardProps = {
  img: string;
  name: string;
};

export function OtherProductCard({ img, name }: OtherProductCardProps) {
  return (
    <div className={styles.box}>
      <img src={img} alt="device" className={styles.img} />
      <h4 className={styles.header}>{name}</h4>
      <button className={styles.button}>See Product</button>
    </div>
  );
}
