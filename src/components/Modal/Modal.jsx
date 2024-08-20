import styles from "./modal.module.css";

function Modal({ title, info, hide }) {
  return (
    <div className={`${styles.container} ${hide ? styles.hide : ""}`}>
      <h5>{title}</h5>
      <span>{info}</span>
    </div>
  );
}

export default Modal;
