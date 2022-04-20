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
  async insert(tableName, columns, values, callback) {
    const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
    this.query(sql, callback);
  }
  async update(tableName, id, columns, values, callback) {
    const sql = `UPDATE ${tableName} SET ${columns} = ${values} WHERE id = ${id}`;
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
