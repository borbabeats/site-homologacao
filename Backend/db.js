const mysql = require('mysql2/promise')
// Connect to MySQL database
console.log('Starting application')
async function connect() {
    const connection = mysql.createPool(process.env.CONNECTION_STRING);
    await connection.getConnection()
    console.log('Connected to the MySQL server.');
    return connection;
  
}
connect();

//usando o pool
async function selectPosts() {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM posts')
    return rows
}
/*
async function selectPosts(id) {
    const res = await post.query('SELECT * FROM posts WHERE ID=?', [id])
    return res[0]
}
*/
async function deletePosts(id) {
    const connection = await connect()
    const [rows] = await connection.query('DELETE FROM posts where id=?;', [id])
    return rows
}

async function insertPosts(post) {
    const connection = await connect()
    const [rows] = await connection.query('INSERT INTO posts (title, subtitle, content, image) VALUES (?,?,?,?)',
    [post.title, post.subtitle, post.content, post.image])
    return rows
}

async function updatePosts(id, post) {
    const connection = await connect()
    const [rows] = await connection.query('UPDATE posts SET title=?, subtitle=?, content=?, image=? WHERE id=?',
    [post.title, post.subtitle, post.content, post.image]
    )
    return rows
}


//users zone
//usando o poll
async function selectUsers() {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM users')
    return rows
}


async function deleteUsers(id) {
    const connection = await connect()
    const [rows] = await connection.query('DELETE FROM users where id=?;', [id])
    return rows
}


async function insertUsers(user) {
    const connection = await connect()
    const [rows] = await connection.query('INSERT INTO users (nome, senha) VALUES (?,?)',
    [user.name, user.senha]
    )
    return rows
}


async function updateUsers(id, user) {
    const connection = await connect()
    const [rows] = await connection.query('UPDATE users SET title=?, subtitle=?, content=?, image=? WHERE id=?',
    [user.title, user.subtitle, user.content, user.image]
    )
    return rows
}




module.exports = { selectPosts, deletePosts, insertPosts, updatePosts, selectUsers, deleteUsers, insertUsers, updateUsers }
