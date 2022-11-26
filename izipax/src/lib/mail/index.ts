import * as nodemailer from 'nodemailer';

const mailer = async (
  email: string,
  options: { subject: string; body: string },
) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from:
      process.env.APPNAME.toUpperCase() +
      '<noreply@' +
      process.env.DOMAINNAME.toLowerCase() +
      '>',
    to: email,
    subject: options.subject,
    html: options.body,
  };

  return await new Promise<boolean>(async function (resolve, reject) {
    return transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log(error);
        return reject(false);
      } else if (!error && info) return resolve(true);
    });
  });
};

export default mailer;
