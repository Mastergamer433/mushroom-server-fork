const express = require("express");
const cors = require("cors");
const app = express();
const config = require('../config.json')
app.use(cors());

app.use("/api/v1", require("../routes/v1"));

let listener = app.listen(config.server.port, () => {
  console.log(`Example app listening on port ${listener.address().port}!`);
});
