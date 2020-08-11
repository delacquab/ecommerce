module.exports = {
  secret:
    process.env.NODE_ENV === "production"
      ? process.env.SECRET
      : "UHSDUISHDSJKDSBDSKJDSHJDGSYDGSYDUSFDSAYDUASGYDGYUSDGSA",
  api:
    process.env.NODE_ENV === "production"
      ? "https://api.loja-teste.ampliee.com"
      : "htpp://localhost:3000",
  loja:
    process.env.NODE_ENV === "production"
      ? "https://loja-teste.ampliee.com"
      : "htpp://localhost:8000"
};
