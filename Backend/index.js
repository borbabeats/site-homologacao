require('dotenv').config()

const express= require('express')
const app = express()
const port = process.env.PORT
const db = require('./db')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }))

app.get('/posts/:id', async (req, res) => {
    const results = await db.selectPosts(req.param.id)
    res.json(results)
})



app.get('/posts', async (req, res) => {
    const results = await db.selectPosts()
    res.json(results)
})
app.get('/users', async (req, res) => {
    const results = await db.selectUsers()
    res.json(results)
})



app.delete('/posts/:id', async (req, res) => {
    await db.deletePosts(req.params.id)
    res.sendStatus(204)
})
app.delete('/users/:id', async (req, res) => {
    await db.deleteUsers(req.params.id)
    res.sendStatus(204)
})



app.post('/posts', async (req, res) => {
    await db.insertPosts(req.body)
    res.sendStatus(201)
})
app.post('/users', async (req, res) => {
    await db.insertUsers(req.body)
    res.sendStatus(201)
})



app.patch('/posts/:id', async (req, res) => {
    await db.updatePosts(req.params.id, req.body)
    res.sendStatus(200)
})
app.patch('/users/:id', async (req, res) => {
    await db.updateUsers(req.params.id, req.body)
    res.sendStatus(200)
})



app.listen(port)
