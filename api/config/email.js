module.exports = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "user@gmail.com",
    pass: "*****"
  }
};

// export default {
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure: false,
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//     default: {
//       from: "Equipe GoBarber <noreply@gobarber.com>",
//     },
//   };

/**
 * Exemplos de email
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril (mailchimp)
 * Mailtrap (DEV)
 */
