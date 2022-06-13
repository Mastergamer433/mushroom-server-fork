const mysql3 = require("../src/db/index");
const config = require('../config.json')
const db = new mysql3(config.db.url);
