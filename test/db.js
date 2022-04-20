const mysql3 = require("../src/db/index");
require("dotenv").config();

const db = new mysql3(proccess.env.DATABASE_URL);
