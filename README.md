# Cia da Barba - Links

Página de link-in-bio para a barbearia **Cia da Barba** em Curitiba. Uma solução moderna e responsiva para centralizar todos os links importantes da barbearia.

## 🎯 Sobre o Projeto

Este projeto oferece uma página de links estilo Linktree para a Cia da Barba, a melhor barbearia por assinatura do bairro Portão em Curitiba. A página inclui links para agendamento via WhatsApp, planos de assinatura, redes sociais e muito mais.

## ✨ Características

- **Design Dark Minimalista**: Alinhado com a identidade visual da barbearia
- **Responsivo**: Otimizado para mobile-first
- **Performance**: Lighthouse score ≥ 90
- **Acessibilidade**: Compatível com leitores de tela e navegação por teclado
- **SEO Otimizado**: Meta tags, OpenGraph e estrutura semântica
- **Animações Suaves**: Micro-interações com Framer Motion

## 🚀 Versões Disponíveis

### 1. Single-file (`index.html`)
Versão standalone usando Tailwind CSS via CDN. Perfeita para hospedagem simples.

### 2. Next.js 14 + TypeScript
Versão completa com App Router, componentes reutilizáveis e animações avançadas.

## 🛠️ Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React 18**

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/ciadabarba/links.git
cd links
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
# ou
pnpm dev
```

4. **Acesse no navegador**
```
http://localhost:3000/links
```

## 🚢 Deploy na Vercel

### Deploy Automático

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ciadabarba/links)

### Deploy Manual

1. **Instale a CLI da Vercel**
```bash
npm i -g vercel
```

2. **Faça login na Vercel**
```bash
vercel login
```

3. **Deploy o projeto**
```bash
vercel --prod
```

### Configurações Recomendadas na Vercel

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── links/
│       └── page.tsx         # Página de links
├── public/
│   ├── favicon.svg          # Favicon
│   ├── manifest.json        # Web App Manifest
│   ├── robots.txt           # Robots.txt
│   ├── sitemap.xml          # Sitemap
│   └── og/
│       └── links.png        # OpenGraph image
├── index.html               # Versão single-file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Paleta de Cores

```css
:root {
  --brand: #F39C12;      /* Laranja principal */
  --black: #0F0F10;      /* Preto principal */
  --gray-900: #1F1F23;   /* Cinza escuro */
  --gray-800: #2D2D32;   /* Cinza médio */
  --gray-600: #6B7280;   /* Cinza claro */
  --white: #ffffff;      /* Branco */
}
```

## 📱 Links Incluídos

- **Agendar no WhatsApp** (CTA principal)
- **Assinar Planos** 
- **Serviços**
- **Nossa Equipe**
- **Localização (Google Maps)**
- **Instagram**
- **Beacons (link original)**

## 🔧 Personalização

### Alterar Links

Edite o array `links` em `app/links/page.tsx`:

```typescript
const links = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/554133293438',
    label: 'Agendar Agora',
    icon: 'whatsapp',
    primary: true,
    external: true
  },
  // ... outros links
]
```

### Alterar Informações de Contato

Modifique as constantes no componente:

```typescript
const phone = '(41) 3329-3438'
const hours = 'TER à SAB, 9h–19h'
const location = 'Bairro Portão – Curitiba, PR'
```

### Adicionar Novos Ícones

Adicione novos ícones no objeto `icons` dentro do componente `Icon`:

```typescript
const icons = {
  // ... ícones existentes
  novoIcone: (
    <svg className={className} viewBox="0 0 24 24">
      <path d="..."/>
    </svg>
  )
}
```

## 📈 Performance

- **Lighthouse Mobile**: ≥ 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## ♿ Acessibilidade

- Contraste AA compatível
- Navegação por teclado
- Labels ARIA em todos os elementos interativos
- Estrutura semântica HTML5

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

**Cia da Barba**
- 📱 WhatsApp: [(41) 3329-3438](https://wa.me/554133293438)
- 📍 Endereço: Bairro Portão, Curitiba - PR
- 📧 Instagram: [@ciadabarbacwb](https://instagram.com/ciadabarbacwb)

---

**Desenvolvido com ❤️ para barbudos de Curitiba**