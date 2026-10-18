# ModulaBiz

Modelo responsivo de site para negócios locais, feito com React, TypeScript e Vite.

## Desenvolvimento e compilação

- `npm install` instala as dependências.
- `npm run dev` inicia o preview local para desenvolvimento.
- `npm run build` compila a versão de produção na pasta `dist/`.
- `npm run preview` serve localmente a compilação para conferência.

## Publicação automática no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` instala as dependências, compila o site e publica a pasta `dist` automaticamente quando houver push para `main` ou `master` (também pode ser acionado manualmente pela aba **Actions**).

Para habilitar a primeira publicação:

1. Envie o projeto para um repositório GitHub.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Envie um commit para `main` ou `master` e acompanhe o workflow na aba **Actions**.

A configuração do Vite detecta o nome do repositório durante a compilação do workflow e configura automaticamente o caminho de assets para URLs de projeto do GitHub Pages. Em repositórios de usuário/organização, também funciona com a URL raiz.

> O site é estático. Imagens externas e o mapa usam serviços públicos; formulários de orçamento abrem o WhatsApp, sem armazenar dados.

## Personalização

Use **Personalizar demo** no site para trocar o segmento, editar os dados do negócio e exportar a configuração JSON.
