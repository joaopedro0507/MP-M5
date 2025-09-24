// src/components/Footer/Footer.jsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} João Pedro • Portfólio em React</p>
    </footer>
  );
}
