const Joi = require('joi').extend(require('@joi/date'));;

const personSchema = Joi.object({
    nombres: Joi.string().trim().max(50).min(3).required().messages({'*':'"Nombres" es requerido'}),
    apellidos: Joi.string().trim().max(50).min(3).required().messages({'*':'"Apellidos" es requerido'}),
    cedula: Joi.string().pattern(/^\d+$/).allow('').trim().messages({'*':'"Cedula" debe tener un formato correcto, sin letras, espacios o numeros negativos'}),
    genero: Joi.string().valid('MASCULINO', 'FEMENINO').required().messages({'*':'"Genero" es requerido'}),
    ocupacion: Joi.string().allow('').trim().max(50).messages({'*':'"Ocupacion" toma como maximo 50 caracteres'}),
    instruccion: Joi.string().allow('').trim().max(50).messages({'*':'"Ocupacion" toma como maximo 50 caracteres'}),
    fnacimiento: Joi.date().format('YYYY/MM/DD').raw().required().messages({'date.format': 'La fecha de nacimiento debe tener el formato "YYYY/MM/DD"',
    'date.base': 'La fecha de nacimiento no es válida',}),
    centrovotacion: Joi.string().allow('').trim().max(50).messages({'*':'"Centro Votacion" debe tener maximo 50 caracteres'}),
    sectortrabajo: Joi.string().allow('').valid('NINGUNO','PUBLICO', 'PRIVADO').messages({'*':'"Sector trabajo" es requerido'}),
    estatusvivienda: Joi.string().allow('').trim().max(50),
    correo: Joi.string().email().allow('').messages({'*':'"Email" debe ser valido'}),
    telefono: Joi.string().pattern(/^\d+$/).allow('').messages({'*':'"Telefono" debe ser valido'}),
    direccionvivienda: Joi.string().allow('').trim().max(100).messages({'*':'"Direccion vivienda" debe tener maximo 100 caracteres'})
});
const personSchemaUpdate = Joi.object({
    idhabitante: Joi.string().trim().required().messages({'*':'"ID Habitante" es requerido'}),
    nombres: Joi.string().trim().max(50).min(3).required().messages({'*':'"Nombres" es requerido'}),
    apellidos: Joi.string().trim().max(50).min(3).required().messages({'*':'"Apellidos" es requerido'}),
    cedula: Joi.string()
        .pattern(/^\d+$/)
        .allow('')
        .trim()
        .messages({'*':'"Cedula" debe tener un formato correcto, sin letras, espacios o números negativos'}),
    genero: Joi.string()
        .valid('MASCULINO', 'FEMENINO')
        .required()
        .messages({'*':'"Genero" es requerido'}),
    ocupacion: Joi.string()
        .allow('')
        .trim()
        .max(50)
        .messages({'*':'"Ocupacion" toma como máximo 50 caracteres'}),
    instruccion: Joi.string()
        .allow('')
        .trim()
        .max(50)
        .messages({'*':'"Ocupacion" toma como máximo 50 caracteres'}),
    fnacimiento: Joi.date()
        .format('YYYY/MM/DD')
        .raw()
        .required()
        .messages({
            'date.format': 'La fecha de nacimiento debe tener el formato "YYYY/MM/DD"',
            'date.base': 'La fecha de nacimiento no es válida',
        }),
    centrovotacion: Joi.string()
        .allow('')
        .trim()
        .max(50)
        .messages({'*':'"Centro de Votacion" debe tener máximo 50 caracteres'}),
    sectortrabajo: Joi.string()
        .allow('')
        .valid('NINGUNO','PUBLICO', 'PRIVADO')
        .messages({'*':'"Sector Trabajo" es requerido'}),
    estatusvivienda: Joi.string()
        .allow('')
        .trim()
        .max(50)
        .messages({'*':'"Estatus de Vivienda" debe tener máximo 50 caracteres'}),
    correo: Joi.string()
        .email()
        .allow('')
        .messages({'*':'"Email" debe ser válido'}),
    telefono: Joi.string()
        .pattern(/^\d+$/)
        .allow('')
        .messages({'*':'"Telefono" debe ser válido'}),
    direccionvivienda: Joi.string()
        .allow('')
        .trim()
        .max(100)
        .messages({'*':'"Direccion de Vivienda" debe tener máximo 100 caracteres'}),
});

const userSchema = Joi.object({
    username: Joi.string().max(30).required().messages({'*':'"Usuario" es requerido'}),
    email: Joi.string().email().required().messages({'*':'"Email" es requerido'}),
    pw: Joi.string().min(5).required().messages({'*':'"Contraseña" es requerida, debe tener mas de 5 caracteres'})
})

const deleteUserSchema = Joi.object({
    username: Joi.string().max(30).required().messages({'*':'"Usuario" es requerido'})
})

const familySchema = Joi.object({
    cedula: Joi.string().pattern(/^\d+$/).allow('').trim().messages({'*':'"Cedula" es requerida'}),
})
const addFamilySchema = Joi.object({
    cedulaJefe: Joi.string().pattern(/^\d+$/).required().messages({'*':'"Cedula" es requerida'}),
    id: Joi.string().pattern(/^\d+$/).required().messages({'*':'"Id" es requerido'}),
    parentesco: Joi.string().valid('MADRE', 'PADRE', 'ESPOSO', 'ESPOSA', 'HIJO', 'HIJA', 'HERMANO', 'HERMANA', 'ABUELO', 'ABUELA', 'TIO', 'TIA', 'SOBRINO', 'SOBRINA', 'PRIMO', 'PRIMA', 'AMIGO', 'AMIGA', 'SUEGRO', 'SUEGRA').required().messages({'*':'"Parentesco" es requerido'})
})

const filterSchema = Joi.object({
    filter: Joi.string().valid('genero', 'instruccion', 'ocupacion', 'parentesco', 'edad', 'todos').required().messages({'*':'"Filtro" es requerido'}),
    value: Joi.string().max(30).required().messages({'*':'"Valor" es requerido'})
})


const socialInfoSchema = Joi.object({
    idhabitante: Joi.number().required(),
    granmisionvivienda: Joi.string().valid('SI', 'NO').allow(''),
    barrionuevobarriotricolor: Joi.string().valid('SI', 'NO').allow(''),
    beneficiadojefepatria: Joi.string().valid('SI', 'NO').allow(''),
    partohumanizado: Joi.string().valid('SI', 'NO').allow(''),
    semanasparto: Joi.string().allow(''),
    fechaparto: Joi.date()
    .format('YYYY/MM/DD')
    .raw()
    .allow('')
    .messages({
        'date.format': 'La fecha de parto debe tener el formato "YYYY/MM/DD"',
        'date.base': 'La fecha de parto no es válida',
    }),
    ivss: Joi.string().valid('SI', 'NO').allow(''),
    lactancia: Joi.string().valid('SI', 'NO').allow(''),
    bajopeso: Joi.string().valid('SI', 'NO').allow(''),
    beneficiadoinn: Joi.string().valid('SI', 'NO').allow(''),
    chambajuvenil: Joi.string().valid('SI', 'NO').allow(''),
    amormayor: Joi.string().valid('SI', 'NO').allow(''),
    otrosbeneficios: Joi.string().max(50).allow(''),
    registradoenpatria: Joi.string().valid('SI', 'NO').allow(''),
    personacondiscapacidad: Joi.string().valid('SI', 'NO').allow(''),
    tipodiscapacidad: Joi.string().allow(''),
    carnetconapdis: Joi.string().valid('SI', 'NO').allow(''),
    beneficiadojosegregoriohernandez: Joi.string().valid('SI', 'NO').allow(''),
    beneficiadovenapp: Joi.string().valid('SI', 'NO').allow(''),
    padecimientos: Joi.string().allow('').max(50),
    medicinas: Joi.string().allow(''),
    patioproductivo: Joi.string().valid('SI', 'NO').allow(''),
    descripcionpatioproductivo: Joi.string().allow('').max(50).messages({'*':'"Descripcion de patio" debe tener maximo 50 caracteres'}),
    habilidadesdestrezas: Joi.string().allow('').max(50).messages({'*':'"Habilidades y destrezas" debe tener maximo 50 caracteres'}),
    mascotas: Joi.string().valid('SI', 'NO').allow(''),
    brigadistamsv: Joi.string().allow('').max(50),
    liderdecalle: Joi.string().allow('').max(50),
})

module.exports = {
    personSchema,
    userSchema,
    familySchema,
    socialInfoSchema,
    personSchemaUpdate,
    addFamilySchema,
    filterSchema,
    deleteUserSchema
};
