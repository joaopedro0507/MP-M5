import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mostrarContato, setMostrarContato] = useState(false);

  return (
    <section id="sobre" className={styles.hero}>
      <div className={styles.text}>
        <h1>
          Olá, eu sou <span>João Pedro</span> 👋
        </h1>
        <p>
          Tenho 16 anos, gosto de futebol, tecnologia e estou estudando para ser
          programador. Aqui compartilho meus projetos e aprendizados!
        </p>

        <button
          className={styles.btnContato}
          onClick={() => setMostrarContato(!mostrarContato)}
        >
          {mostrarContato ? "Ocultar contato" : "📩 Entrar em Contato"}
        </button>

        {mostrarContato && (
          <div>
            <p className={styles.contato}>📧 jp10albano@gmail.com</p>
            <p className={styles.contato}>📞 (31) 98113-4372</p>
          </div>
        )}
      </div>

      <div className={styles.image}>
        <img src="/Minhafoto.jpg" alt="Foto João Pedro" />
      </div>
    </section>
  );
}
