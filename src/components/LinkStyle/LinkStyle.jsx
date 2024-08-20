import styles from "./linkStyle.module.css";
function LinkStyle({ text }) {
  return <h5 className={styles.link}>{text}</h5>;
}

export default LinkStyle;
