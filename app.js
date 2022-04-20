const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());

app.use("/api/v1", require("./routes/v1"));

app.listen(8080, () => {
  console.log("Example app listening on port 3000!");
});
