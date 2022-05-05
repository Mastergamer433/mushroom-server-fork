const db2 = require("mysql2");

class Database {
  constructor(config) {
    this.connection = db2.createConnection(config);
  }

  async getAll(tableName, callback) {
    const sql = `SELECT * FROM ${tableName}`;
    this.query(sql, callback);
  }
  async get(tableName, id, callback) {
    const sql = `SELECT * FROM ${tableName} WHERE id = ${id}`;
    this.query(sql, callback);
  }
  async delete(tableName, id, callback) {
    const sql = `DELETE FROM ${tableName} WHERE id = ${id}`;
    this.query(sql, callback);
  }

  async query(sql, callback) {
    this.connection.query(sql, (err, result) => {
      callback({ result: result, error: err });
    });
  }
}

module.exports = Database;
