# 🌐 Portfólio Pessoal — João Pedro

## 📌 Contextualização do projeto
Este repositório contém um portfólio pessoal feito para apresentar a trajetória, habilidades e projetos do **João Pedro**.  
O site é uma aplicação **single-page** desenvolvida com **React** (Vite) e utiliza CSS Modules para manter os estilos organizados.  
Objetivos principais:
- Apresentar projetos e links para repositórios;
- Mostrar informação de contato de forma prática (botão que revela e-mail/telefone);
- Ter visual limpo e responsivo com microinterações (hover, transições).

---

## 🧰 Tecnologias utilizadas (versões recomendadas)
- **Node.js** — recomenda-se usar uma versão LTS (ex.: **v22.x**).  
- **React** — **v19.x**.  
- **Vite** — **v7.x**.  
- **CSS Modules** — (padrão do projeto para escopo de estilos).  
- **Sass (opcional)** — **sass 1.93.x** (se preferir usar `.scss`).  
- **styled-components (opcional)** — **6.x** (se escolher CSS-in-JS).  
- **react-icons (opcional)** — **5.5.x** (para usar ícones SVG prontos).

> Use as versões acima como referência para garantias de compatibilidade — atualizações pontuais (patches) são esperadas.

---

## ⚙️ Passo a passo para executar o projeto (desenvolvimento)

### 1. Pré-requisitos
- Instale o **Node.js** (recomendo a versão LTS; use `nvm`/`fnm` se quiser trocar de versão facilmente).  
- Git (opcional, para clonar).

### 2. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
3. Instalar dependências
bash
Copiar código
npm install
# ou
# yarn
4. Rodar em modo desenvolvimento
bash
Copiar código
npm run dev
Abra o navegador em http://localhost:5173 (porta padrão do Vite) ou no endereço mostrado no terminal.

5. Build para produção
bash
Copiar código
npm run build
npm run preview   # para testar o build localmente
6. Deploy (opções rápidas)
Vercel / Netlify: conecte o repositório, configure build command npm run build e a pasta de saída dist.

GitHub Pages: use o workflow de CI/CD ou tools que geram o build e publicam a pasta dist.

📝 Notas e dicas rápidas
Coloque imagens públicas (ex.: foto do perfil) na pasta public/ e referencie como /minha-foto.png.

Use id nas seções (ex.: id="sobre", id="projetos", id="contato") para que os links do menu (href="#sobre") rolem até o local correto.

Para fontes personalizadas, adicione o link do Google Fonts em index.html e defina a família no CSS global.

Mantenha apenas uma estratégia de estilo (CSS Modules ou Sass ou styled-components) para consistência.

📬 Contato
João Pedro — jp10albano@gmail.com

Telefone: (31) 98113-4372

perl
Copiar código

### Fontes / verificação de versões
- Node.js (release / versões LTS) — fonte de versão/release. :contentReference[oaicite:0]{index=0}  
- React (versões) — versão documentada no site oficial. :contentReference[oaicite:1]{index=1}  
- Vite (npm / release info) — versão mais recente na página do pacote. :contentReference[oaicite:2]{index=2}  
- Sass (npm) — versão do pacote `sass` no npm. :contentReference[oaicite:3]{index=3}  
- styled-components (releases) — versão estável listada nas releases. :contentReference[oaicite:4]{index=4}  
- react-icons (npm) — versão do pacote `react-icons`. :contentReference[oaicite:5]{index=5}
