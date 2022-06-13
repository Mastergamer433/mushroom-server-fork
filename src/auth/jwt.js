const jwt = require("jsonwebtoken");
const config = require('../../../config.json')

module.exports = {
  generateToken: (payload) => {
    const secret = config.auth.jwt;
    const options = {
      expiresIn: "14d",
    };
    return jwt.sign(payload, secret, options);
  },
  verifyToken: (token) => {
    return jwt.verify(token, config.auth.jwt);
  },
};
