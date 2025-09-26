// src/components/Footer/Footer.jsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} João Pedro. Todos os direitos reservados.</p>
      <div className={styles.social}>
        <a href="https://github.com/joaopedro0507" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
}
