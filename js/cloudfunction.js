const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmailConfirmation = functions.database.ref('/messages').onWrite(async (change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: '"......" <teamnischalraj@gmail.com>',
    to: "sub.subham9574@gmail.com",
  };

  // Building Email message.
  mailOptions.subject = 'Dear ' + val.name;  //for example
  mailOptions.text = val.description;

  try {
    await mailTransport.sendMail(mailOptions);
    console.log('email sent to:', val.email);
  } catch(error) {
    console.error('There was an error while sending the email:', error);
  }
  return null;
});

