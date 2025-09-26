import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mostrarContato, setMostrarContato] = useState(false);

  return (
    <section className={styles.hero}>
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
          <>
            <p className={styles.contato}>📧 jp10albano@gmail.com</p>
            <p className={styles.contato2}>📞 31-981134372</p>
          </>
        )}
      </div>

      <div className={styles.image}>
        <img src="/Minhafoto.jpg" alt="Foto João Pedro" />
      </div>
    </section>
  );
}
