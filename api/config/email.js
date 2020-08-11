// module.exports = {
//   host: "smtp.gmail.com",
//   port: 465,
//   auth: {
//     user: "user@gmail.com",
//     pass: "*****"
//   }
// };

module.exports = {
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "b63b8c4e44f70c",
    pass: "1653492e205111"
  },
  default: {
    from: "Equipe GoBarber <noreply@gobarber.com>"
  }
};

/**
 * Exemplos de email
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril (mailchimp)
 * Mailtrap (DEV)
 */
