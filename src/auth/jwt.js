const jwt = require("jsonwebtoken");

module.exports = {
  generateToken: (payload) => {
    const secret = process.env.JWT_SECRET;
    const options = {
      expiresIn: "14d",
    };
    return jwt.sign(payload, secret, options);
  },
  verifyToken: (token) => {
    const secret = process.env.JWT_SECRET;
    return jwt.verify(token, secret);
  },
};
