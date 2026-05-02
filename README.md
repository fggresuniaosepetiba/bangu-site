# G.R.E.S. Unidos de Bangu — Site Oficial

> O Coração da Zona Oeste desde 1937 🎭

---

## 📁 Estrutura do Projeto

```
/
├── home.html               ← Página principal (abrir aqui)
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css       ← Todos os estilos (responsivo, animações, scrollbar)
│   ├── js/
│   │   └── script.js       ← Interatividade (navbar, menu mobile, galeria, countdown)
│   └── images/             ← Pasta para imagens locais (logo, fotos)
│
├── components/
│   ├── navbar.html         ← Componente navbar (referência)
│   └── hero.html           ← Componente hero (referência)
│
├── data/
│   └── content.json        ← Dados de conteúdo (pronto para API)
│
└── services/
    └── api.js              ← Camada de serviço (preparado para backend)
```

---

## 🎨 Paleta de Cores

| Cor        | Hex       | Uso                             |
|------------|-----------|---------------------------------|
| Vermelho   | `#8B0000` | Primária — CTA, títulos, destaques |
| Branco     | `#FFFFFF` | Secundária — fundos, textos     |
| Dourado    | `#C9A84C` | Terciária — acentos, bordas     |
| Creme      | `#FCFAF7` | Superfícies, seção hero         |

---

## 🚀 Como Usar

1. Extraia o `.zip`
2. Abra `index.html` diretamente no navegador
   - **Não precisa de servidor** para visualizar
   - Para editar: abra a pasta no VS Code

---

## 📦 Funcionalidades

- ✅ Navbar fixa com efeito glassmorphism + scroll highlight
- ✅ Menu hambúrguer responsivo para mobile
- ✅ Logo circular com animação de pandeiro
- ✅ Countdown regressivo para o Carnaval 2027
- ✅ Galeria com lightbox ao clicar
- ✅ Seção Carnaval 2027 com destaque visual
- ✅ Scrollbar personalizada (vermelho)
- ✅ Animações de entrada suaves (fade-up)
- ✅ 100% responsivo: mobile, tablet, desktop

---

## 🔧 Personalização Rápida

### Trocar a logo
```html
<!-- home.html, dentro de .logo-circle -->
<img src="assets/images/logo.png" alt="Brasão Unidos de Bangu">
```

### Trocar o enredo 2027
```json
// data/content.json
"carnaval_2027": {
  "enredo": "Nome do Novo Enredo"
}
```

### Ajustar cores
```css
/* assets/css/style.css — linha ~15 */
:root {
  --color-primary: #8B0000;
  --color-gold:    #C9A84C;
}
```

---

## 🔌 Preparado para Backend

O arquivo `services/api.js` contém uma camada de abstração pronta.
Para conectar ao backend, basta alterar `API_BASE_URL`:

```js
const API_BASE_URL = 'https://api.unidosdebangu.com.br/v1';
```

---

## 📱 Suporte de Dispositivos

| Dispositivo      | Breakpoint  | Status |
|------------------|-------------|--------|
| Desktop (>1280px)| —           | ✅      |
| Notebook         | 1024–1280px | ✅      |
| Tablet           | 768–1024px  | ✅      |
| Mobile landscape | 480–768px   | ✅      |
| Mobile portrait  | <480px      | ✅      |

---

## 🏆 Tecnologias

- **HTML5** semântico
- **CSS3** puro (variáveis, grid, flexbox, animações)
- **JavaScript** vanilla ES6+
- **Google Fonts** — Noto Serif + Be Vietnam Pro
- **Material Symbols** — ícones

---

*© 1937–2025 G.R.E.S. Unidos de Bangu — Todos os direitos reservados*
