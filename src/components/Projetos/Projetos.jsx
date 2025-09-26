import React from "react";
import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section className={styles.container}>
      <h2>🚀 Meus Projetos</h2>

      <div className={styles.projeto}>
        <h3>API Buscar CEP</h3>
        <p>Aplicação web para controle e busca de endereço.</p>
        <a href="https://github.com/Barbara123Oliveira/PROJETO-FINAL-M3" target="_blank">
          Ver no GitHub
        </a>
      </div>

      <div className={styles.projeto}>
        <h3>Quiz do Aranhaverso 🕷️</h3>
        <p>Site institucional moderno para apresentação de um jogo em estilo Quiz.</p>
        <a href="https://github.com/Luana13-bit/PROJETO-FINAL-M2" target="_blank">
          Ver no GitHub
        </a>
      </div>

      <div className={styles.projeto}>
        <h3>API Combate ao Racismo</h3>
        <p>API desenvolvida em Node.js para integração social e combate ao racismo.</p>
        <a href="https://github.com/joaopedro0507/API-PROJETO-FINAL-M4" target="_blank">
          Ver no GitHub
        </a>
      </div>
    </section>
  );
}
