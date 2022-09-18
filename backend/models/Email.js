const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'franko.safradin@hotmail.com', // generated ethereal user
    pass: 'dxlmkjtgpavtgprh', // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// send mail with defined transport object
const emailSender = async (mailTo, userId) => {
  try {
    await transporter.sendMail({
      from: '"Mentor.com" <franko.safradin@hotmail.com>', // sender address
      to: mailTo, // list of receivers
      subject: 'Please verify your email address', // Subject line
      text: 'Hello world?', // plain text body
      html: `<p>Thank you for registering, to prevent spam accounts, please follow this <a href="http://localhost:5000/auth/verify/${userId}">link</a><p>`, // html body
    });
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = { emailSender };
