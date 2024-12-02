const Joi = require('joi')

const sanitizeInput = (schema) => (req, res, next) => {
    const {error, value} = schema.validate(req.body)
    if(error){
        return res.status(400).json({ error: error.details });
    }
    req.body = value
    next()
}

module.exports = {
    sanitizeInput
}