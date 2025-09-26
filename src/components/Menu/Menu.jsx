// src/components/Menu.jsx
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header className={styles.containerMenu}>
      <p className={styles.logo}>⚽💻 João Pedro</p>
      <ul className={styles.menu}>
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </header>
  );
}
