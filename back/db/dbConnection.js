require('dotenv').config()
const {Client} = require('pg')

const connectionData = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PW,
    port: process.env.DB_PORT
}

const client = new Client(connectionData)

client.connect()

module.exports = {
    client
}