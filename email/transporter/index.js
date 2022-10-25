const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  host: 'mail.gmx.de',
  port: 587,
  /* logger: true,
  debug: true, */
  secureConnection: false,
  auth: {
    user: 'elui@gmx.de',
    pass: 'Farin2001gmx'
      },
  tls: {
      rejectUnauthorized: false
    },
});

module.exports = transporter


