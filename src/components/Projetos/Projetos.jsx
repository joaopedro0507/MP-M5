// src/components/Projetos.jsx
import { useState } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState([
    "Site para Clínica de Estética",
    "Dashboard em React",
    "API utilitária com Express",
  ]);

  const adicionarProjeto = () => {
    setProjetos([...projetos, `Novo Projeto ${projetos.length + 1}`]);
  };

  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">🚀 Meus Projetos</h2>
      <ul className="mb-6">
        {projetos.map((proj, index) => (
          <li key={index} className="py-1">
            🔹 {proj}
          </li>
        ))}
      </ul>
      <button
        onClick={adicionarProjeto}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Adicionar Projeto
      </button>
    </section>
  );
}
