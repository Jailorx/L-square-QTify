import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.feedback}>{text}</button>;
};

export default Button;
