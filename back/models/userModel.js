const {client} = require('../db/dbConnection')

async function getUserByUsername(username) {
    try{
        const query = 'SELECT username FROM users WHERE username = $1'
        const values = [username]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}

async function getEmail(email) {
    try{
        const query = 'SELECT email FROM users WHERE email = $1'
        const values = [email]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}

async function createUser(username, email, pw) {
    try{
        const query = 'INSERT INTO users (username, email, pw) VALUES ($1, $2, $3)'
        const values = [username, email, pw]
        const result = await client.query(query, values)
        return 'Successfully'
    }catch(error){
        return error
    }
}
async function deleteUser(username) {
    try{
        const query = 'DELETE FROM users WHERE username = $1'
        const values = [username]
        const result = await client.query(query, values)
        return 'Usuario eliminado'
    }catch(error){
        return error
    }
}

async function verifyUser(username) {
    try{
        const query = 'SELECT * FROM users WHERE username = $1'
        const values = [username]
        const result = await client.query(query, values)
        return result.rows
    } catch (error){
    }
}

module.exports = {
    verifyUser,
    createUser,
    getUserByUsername,
    getEmail,
    deleteUser
}