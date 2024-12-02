const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function logout(req, res) {
    res.clearCookie('token').status(200).json({})
}

async function verifyToken(req, res) {
    try {
        const token = req.body.cookie;
        if (!token) {
            return res.status(401).json({message: "No se encontró el token"});
        }
        
        jwt.verify(token, 'servicio', (err, decoded) => {
            if (err) {
                return res.status(403).json({message: "Token inválido"});
            } else {
                return res.status(200).json({username: decoded.username, rol: decoded.userRol});
            }
        });
    } catch (error) {
        res.status(500).json({message: "Error al autenticar", error: error.message});
    }
}


async function verifyUser(req, res) {
    const username = req.body.username.trim()
    const pw = req.body.pw.trim()
    const result = await userModel.verifyUser(username)
    if(result.length == 0){
        return res.status(404).json({message: "usuario no registrado"})
    }
    const userPw = result[0].pw
    const userRol = result[0].rol_id
    if (await bcrypt.compare(pw, userPw)){
        const token = jwt.sign({username, userRol}, 'servicio', {expiresIn: '1h'})
        return res.status(200).cookie('token', token, {secure:false, httpOnly: true, sameSite: 'Lax', maxAge: 3 * 60 * 60 * 1000}).send({})
    }
    return res.status(401).json({message: "Contraseña incorrecta"})
}

async function createUser(req, res) {
    const username = req.body.username.trim()
    const email = req.body.email.trim()
    const pw = req.body.pw.trim()

    // Verificacion de campos y usuario/email existente
    if (!username || !email){
        return res.status(400).json({message: "Campos vacios"})
    }
    if (pw.length < 5){
        return res.status(400).json({message: "La contraseña debe tener almenos 5 caracteres"})
    }
    const existingUser = await userModel.getUserByUsername(username)
    if (existingUser.length > 0){
        return res.status(409).json({message: "Usuario ya registrado"})
    }
    const existingEmail = await userModel.getEmail(email)
    if (existingEmail.length > 0){
        return res.status(409).json({message: "Email ya registrado"})
    }
    // Hasheo de contraseña e insercion a la base de datos
    const hashedPw = await bcrypt.hash(pw, 10)
    const result = userModel.createUser(username, email, hashedPw)
    return res.json(result)
}

async function deleteUser(req, res) {
    const existingUser = await userModel.getUserByUsername(req.body.username)
    if (existingUser.length == 0){
        return res.status(409).json({message: "Usuario no registrado"})
    }

    const result = await userModel.deleteUser(req.body.username)
    return res.status(200).json(result)
}

module.exports = {
    verifyUser,
    createUser,
    verifyToken,
    logout,
    deleteUser
}