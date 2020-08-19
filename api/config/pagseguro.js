module.exports = {
  mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
  sandbox: process.env.NODE_ENV === "production" ? false : true,
  sandbox_email:
    process.env.NODE_ENV === "production"
      ? null
      : "c32026553904507141200@sandbox.pagseguro.com.br",
  email: "https://sandbox.pagseguro.uol.com.br/",
  token: "ED6054480B0146E6A75D2A1C462BB748",
  notificationURL:
    "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao"
};
