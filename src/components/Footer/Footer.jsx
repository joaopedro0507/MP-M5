import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <p>📧 Email: jp10albano@gmail.com</p>
      <p>📞 Telefone: (31) 98113-4372</p>
      <p>© {new Date().getFullYear()} João Pedro - Todos os direitos reservados</p>
      <div className={styles.social}>
        <a href="https://github.com/joaopedro0507" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>

    </footer>
  );
}
