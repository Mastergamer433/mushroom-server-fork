require("dotenv").config();

try {
  var transporter = require("nodemailer").createTransport(process.env.SMTP_URL);
} catch (error) {
  console.log("Error Creating Transporter. Check the .env file");
}

module.exports = {
  verify: async () => {
    transporter.verify((error, success) => {
      if (error) throw error;
      console.info("Server is ready to take our messages");
    });
  },
};
