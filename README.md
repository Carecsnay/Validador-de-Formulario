# Validador de Formulário com JavaScript

Este projeto é um exemplo de validação de formulário usando JavaScript puro. Ele demonstra como verificar a validade de campos de entrada em tempo real e desabilitar o botão de envio até que todos os campos estejam preenchidos corretamente.

## Tecnologias Utilizadas

- **HTML5**: Para estruturação da página.
- **CSS3**: Para estilização do layout (referência ao arquivo `index.css`).
- **JavaScript**: Para manipulação da DOM e validação do formulário.

## Funcionalidades

- **Validação de campos**: Os campos `nome`, `email` e `senha` só permitem o envio do formulário se atenderem aos requisitos:
  - Nome: Mínimo de 20 caracteres.
  - Email: Formato de email válido.
  - Senha: Mínimo de 8 caracteres.
- **Botão desabilitado**: O botão de envio está desativado enquanto os campos não estiverem válidos.
- **Prevenção do envio**: O envio do formulário é impedido por padrão, mas você pode adicionar lógica adicional na função `handleSubmit`.

## Estrutura do Projeto

```
.
├── index.html         # Arquivo principal HTML
├── src/
│   ├── style/
│   │   └── index.css  # Arquivo de estilos
│   ├── scripts/
│   │   └── index.js   # Lógica de validação do formulário
│   └── images/
│       └── screen.png # Imagem exibida na página
```

## Deploy

Confira o projeto em funcionamento clicando no link abaixo:

[Validador de Formulário - Deploy](https://validador-de-formulario.vercel.app/)

## Personalização

- **Estilização**: Modifique o arquivo `index.css` para alterar o layout.
- **Validação**: Altere os atributos `minlength`, `type` ou `required` no HTML conforme suas necessidades.
- **Lógica de envio**: Adicione funcionalidades específicas no método `handleSubmit` no arquivo `index.js`.

## Captura de Tela

![Macbook-Air-validador-de-formulario vercel app](https://github.com/user-attachments/assets/3edfc1aa-da8a-4dd6-af14-b34382c512a2)

## Autor

Criado por Bruno Benicio. Sinta-se à vontade para contribuir ou enviar sugestões!
