const config = require('../config.json')

try {
  var transporter = require("nodemailer").createTransport(config.smtp.url);
} catch (error) {
  console.log("Error Creating Transporter. Check the config.json file");
}

module.exports = {
  verify: async () => {
    transporter.verify((error, success) => {
      if (error) throw error;
      console.info("Server is ready to take our messages");
    });
  },
};
