const mysql = require('mysql2');

// Connect to MySQL database
const connection = mysql.createConnection({
    host: 'maxiforja5.mysql.dbaas.com.br',
    user: 'maxiforja5',
    password: 'm@xI#1181!*',
    database: 'maxiforja5'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

// Define user model
const User = {
  create: (name, password, callback) => {
    const sql = 'INSERT INTO users (name, password) VALUES (?,?)';
    connection.query(sql, [name, password], (err, results) => {
      if (err) {
        console.error('Error creating user: ', err);
        callback(err);
        return;
      }
      callback(null, results);
    });
  },
  findById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id =?';
    connection.query(sql, [id], (err, results) => {
      if (err) {
        console.error('Error finding user by id: ', err);
        callback(err);
        return;
      }
      if (results.length === 0) {
        const error = new Error('User not found');
        error.status = 404;
        callback(error);
        return;
      }
      callback(null, results[0]);
    });
  },
  findAll: (callback) => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error finding all users: ', err);
        callback(err);
        return;
      }
      callback(null, results);
    });
  },
  update: (id, name, password, callback) => {
    const sql = 'UPDATE users SET name =?, email =?, password =? WHERE id =?';
    connection.query(sql, [name, password, id], (err, results) => {
      if (err) {
        console.error('Error updating user: ', err);
        callback(err);
        return;
      }
      if (results.affectedRows === 0) {
        const error = new Error('User not found');
        error.status = 404;
        callback(error);
        return;
      }
      callback(null, results);
    });
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id =?';
    connection.query(sql, [id], (err, results) => {
      if (err) {
        console.error('Error deleting user: ', err);
        callback(err);
        return;
      }
      if (results.affectedRows === 0) {
        const error = new Error('User not found');
        error.status = 404;
        callback(error);
        return;
      }
      callback(null, results);
    });
  }
};

module.exports = User;