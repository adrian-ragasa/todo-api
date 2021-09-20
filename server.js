
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const port = 8080
require('./db')

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.use('*', function (req, res) {
    res.status(404).send({ error: 'Route Not Found.' });
})

app.listen(port, () => {
    console.log(`ToDo Api listening at port:${port}`)
})