import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.containerMenu}>
      <p className={styles.logo}>⚽💻 João Pedro</p>
      <ul className={styles.menu}>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
