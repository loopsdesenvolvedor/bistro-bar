# Bistrô Bar

**Bistrô Bar** é um aplicativo desenvolvido com **React Native** para a versão mobile e **Next.js** para a versão web. A API REST foi criada em **Node.js** com o **Express**. Este projeto tem como objetivo demonstrar conhecimentos em desenvolvimento mobile e backend, integrando funcionalidades essenciais para a operação de um restaurante ou bar.

## Funcionalidades

- **Cadastro de Usuários:** Permite a criação e gerenciamento de contas de usuários, com opções de login e logout.
- **Reservas de Mesa:** Funcionalidade para que os usuários possam reservar mesas no estabelecimento, incluindo horário e número de pessoas.
- **Login e Criação de Conta:** Implementação de autenticação com JWT (JSON Web Tokens) para um login seguro.
- **Envio de E-mails:** Integração com um serviço de envio de e-mails (como NodeMailer ou outros) para notificações de confirmações de reservas e pedidos.
- **Compras Online:** Sistema de pedidos online com o menu do restaurante/bar, permitindo que o usuário adicione itens ao carrinho e efetue o pagamento.
- **Integração com API de Pagamentos:** Integração com [Stripe/PayPal] para processamento seguro de pagamentos.

## Tecnologias Utilizadas

- **Frontend:**
  - **React Native** para o desenvolvimento da versão mobile do aplicativo (Android/iOS).
  - **Next.js** para a versão web, garantindo uma experiência rica com renderização no servidor (SSR) e construção de páginas dinâmicas.
  
- **Backend:** Node.js + Express
- **Banco de Dados:** MySQL com Prisma ORM
- **Autenticação:** JWT (JSON Web Tokens)
- **Integração com APIs de Pagamento:** Stripe/Paypal

## Instalação e Execução

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org).
- **MySQL**: Tenha o MySQL instalado ou utilize um banco de dados em nuvem (como o [PlanetScale](https://planetscale.com) ou [Remix DB](https://remix.run/docs/en/v1/apis/db)).

### Configuração do Backend

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuário/bistro-bar.git
    cd bistro-bar
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente (crie um arquivo `.env`):
    ```
    DATABASE_URL=mysql://user:password@localhost:3306/bistro_bar
    JWT_SECRET=seu-segredo
    SMTP_HOST=smtp.exemplo.com
    SMTP_PORT=587
    SMTP_USER=email@exemplo.com
    SMTP_PASSWORD=senha
    ```

4. Execute as migrações do banco de dados:
    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

### Configuração do Frontend (Web e Mobile)

- **Web (Next.js)**: Para rodar a versão web do projeto, vá até a pasta `web` e execute:
    ```bash
    cd web
    npm install
    npm run dev
    ```

- **Mobile (React Native)**: Para rodar a versão mobile, siga as instruções no [React Native Documentation](https://reactnative.dev/docs/environment-setup).

## Layout no Figma

O layout e design do aplicativo estão disponíveis no Figma. Você pode acessar o link abaixo para visualizar e acompanhar o design do projeto:

[Figma - Bistrô Bar Layout](https://www.figma.com/design/57k6KdVe2l6uUX1TmDWkAl/bistro-bar?node-id=350-653&node-type=canvas&t=IeET4ITv6XzDdYvv-0)

## Objetivo

Este projeto serve como uma demonstração de como integrar funcionalidades essenciais para um aplicativo de restaurante/bar, combinando conhecimentos de desenvolvimento front-end e back-end. Ele visa fornecer uma experiência integrada para usuários e proprietários de restaurantes, com foco na facilidade de uso e performance.

## Capturas de Tela

![image_13-removebg-preview](https://github.com/user-attachments/assets/36f4a484-2468-44e5-95c3-4dc37d5fe578)

[Veja como o aplicativo está ficando diretamente no Figma](https://www.figma.com/proto/57k6KdVe2l6uUX1TmDWkAl/bistro-bar?node-id=683-556&node-type=canvas&t=IeET4ITv6XzDdYvv-0&scaling=scale-down&content-scaling=fixed&page-id=350%3A653)

## Contribuindo

Contribuições são bem-vindas! Se você quiser contribuir para o projeto, por favor, faça um fork e crie uma nova branch. Envie um pull request com a descrição das mudanças feitas.

---

**Nota:** Se precisar de mais detalhes ou ajuda com a configuração, fique à vontade para abrir uma issue ou enviar um email para [scarabellot.lopes@gmail.com](mailto:scarabellot.lopes@gmail.com).
