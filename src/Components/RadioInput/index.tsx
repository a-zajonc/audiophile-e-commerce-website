import styles from "./index.module.scss";

type Props = {
  title: string;
  radioName: string;
  setOption: any;
};

export const RadioInput = ({ title, radioName, setOption }: Props) => (
  <label className={styles.label} htmlFor={title}>
    <input
      className={styles.input}
      type="radio"
      name={radioName}
      id={title}
      value={title}
      onClick={() => {
        setOption(title);
      }}
    />
    {title}
  </label>
);
