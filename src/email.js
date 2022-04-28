const ejs = require("ejs");
require("dotenv").config();

try {
  var transporter = require("nodemailer").createTransport(process.env.SMTP_URL);
} catch (error) {
  console.log("Error Creating Transporter. Check the .env file");
}

module.exports = {
  send: async (template, to, subject, prams) => {
    await ejs.renderFile(
      process.cwd() + "/mails/" + template + ".ejs",
      prams,
      async (err, data) => {
        if (err) console.log(err);
        await transporter.sendMail({
          from: process.env.SMTP_EMAIL_FROM,
          to: to,
          subject: subject,
          html: data,
        });
      }
    );
  },
  verify: async () => {
    transporter.verify((error, success) => {
      if (error) throw error;
      console.info("Server is ready to take our messages");
    });
  },
};
