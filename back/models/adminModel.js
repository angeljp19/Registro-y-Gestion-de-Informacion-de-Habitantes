const {client} = require('../db/dbConnection')

async function createFamily(idJefe) {
    try {
        let query = 'INSERT INTO familia (jefeFamilia) VALUES ($1) RETURNING id'
        let values = [idJefe]
        let result = await client.query(query, values)
        let id = result.rows[0].id
        query = 'UPDATE habitantes SET idFamilia = $1, parentesco = \'JEFE\' WHERE id = $2'
        values = [id, idJefe]
        result = await client.query(query, values)
        return "Ok"
    } catch (error) {
        return error
    }
}
async function deleteFamily(idfamilia) {
    try{
        let query = "UPDATE habitantes SET parentesco = null WHERE idfamilia = $1"
        const values = [idfamilia]
        let result = await client.query(query, values)
        query = 'DELETE FROM familia WHERE id = $1'
        result = await client.query(query, values)
        return 'ok'
    }catch(error){
        return error
    }
}
async function deletePersonFamily(id) {
    try{
        let query = "UPDATE habitantes SET idfamilia = null, parentesco = null WHERE id = $1"
        const values = [id]
        let result = await client.query(query, values)
        return 'ok'
    }catch(error){
        return error
    }
}
async function createPerson(listValues) {
    try{
        const query = 'INSERT INTO habitantes (nombres, apellidos, cedula, genero, instruccion, ocupacion, fnacimiento, centrovotacion, sectortrabajo, estatusvivienda, correo, direccionvivienda, telefono, idfamilia, parentesco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id'
        const values = listValues
        const result = await client.query(query, values)
        const generatedId = result.rows[0].id;
        return {id: generatedId}
    }catch(error){
        return error
    }
}
async function updatePerson(listValues) {
    try{
        const query = 'UPDATE habitantes SET nombres = $2, apellidos = $3, cedula = $4, genero = $5, instruccion = $6, ocupacion = $7, fnacimiento = $8, centrovotacion = $9, sectortrabajo = $10, estatusvivienda = $11, correo = $12, direccionvivienda = $13, telefono = $14, idfamilia = $15, parentesco = $16 WHERE id = $1'
        const values = listValues
        const result = await client.query(query, values)
        return 'ok'
    }catch(error){
        return error
    }
}
async function deletePerson(id) {
    try{
        const query = 'DELETE FROM habitantes WHERE id = $1'
        const values = [id]
        const result = await client.query(query, values)
        return 'ok'
    }catch(error){
        return error
    }
}
async function getPersonByCedula(cedula) {
    try{
        const query = "SELECT *, DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) AS edad FROM habitantes WHERE cedula = $1"
        const values = [cedula]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}
async function getPersonById(id) {
    try{
        const query = "SELECT *, DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) AS edad FROM habitantes WHERE id = $1"
        const values = [id]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}
async function getPersonByEmail(email) {
    try{
        const query = "SELECT * FROM habitantes WHERE correo = $1"
        const values = [email]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}
async function getFamilyByCedula(cedula) {
    try{
        const query = "SELECT idFamilia FROM habitantes WHERE cedula = ($1)"
        const values = [cedula]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}
async function addfamily(id, idfamilia, parentesco) {
    try{
        const query = 'UPDATE habitantes SET idfamilia = $1, parentesco = $2 WHERE id = $3'
        const values = [idfamilia, parentesco, id]
        const result = client.query(query, values)
        return 'OK'
    }catch(error){
        return error
    }
}
async function addSocialInfo(listValues) {
    try{
        const query = 'INSERT INTO infosocial VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28) ON CONFLICT (idhabitante) DO UPDATE SET granmisionvivienda = $2,barrionuevobarriotricolor = $3, beneficiadojefepatria = $4, partohumanizado = $5, semanasparto = $6, fechaparto = $7, ivss = $8, lactancia = $9, bajopeso = $10, beneficiadoinn = $11, chambajuvenil = $12, amormayor = $13, otrosbeneficios = $14, registradoenpatria = $15, personacondiscapacidad = $16, tipodiscapacidad = $17, carnetconapdis = $18, beneficiadojosegregoriohernandez = $19, beneficiadovenapp = $20, padecimientos = $21, medicinas = $22, patioproductivo = $23, descripcionpatioproductivo = $24, habilidadesdestrezas = $25, mascotas = $26, brigadistamsv = $27, liderdecalle = $28'
        const values = listValues
        const result = await client.query(query, values)
        return result
    }catch(error){
        return error
    }
}
async function getSocialInfo(id) {
    try{
        const query = 'SELECT * FROM infosocial WHERE idhabitante = $1'
        const values = [id]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}
async function gethabitantes() {
    try{
        const query = "SELECT *, DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) AS edad FROM habitantes"
        const result = await client.query(query)
        return result.rows
    }catch(error){
        return error
    }
}
async function getStadistic() {
    try{
        let query = "SELECT COUNT(genero) FROM habitantes WHERE genero = 'MASCULINO'"
        let result = await client.query(query)
        const masculino = parseInt(result.rows[0].count);

        query = "SELECT COUNT(genero) FROM habitantes WHERE genero = 'FEMENINO'"
        result = await client.query(query)
        const femenino = parseInt(result.rows[0].count);

        query = "SELECT COUNT(ocupacion) FROM habitantes WHERE ocupacion = 'ESTUDIANTE'"
        result = await client.query(query)
        const estudiantes = parseInt(result.rows[0].count);

        query = "SELECT COUNT(ocupacion) FROM habitantes WHERE ocupacion = 'TRABAJADOR'"
        result = await client.query(query)
        const trabajadores = parseInt(result.rows[0].count);

        query = "SELECT COUNT(fnacimiento) FROM habitantes WHERE DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) < 18"
        result = await client.query(query) 
        const menores = parseInt(result.rows[0].count);

        query = "SELECT COUNT(fnacimiento) FROM habitantes WHERE DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) >= 18"
        result = await client.query(query) 
        const adultos = parseInt(result.rows[0].count);

        query = "SELECT COUNT(fnacimiento) FROM habitantes WHERE (genero = 'FEMENINO' AND DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) >= 55) OR (genero = 'MASCULINO' AND DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) >= 60)"
        result = await client.query(query) 
        const adultosMayores = parseInt(result.rows[0].count);

        const stadistic = {
            masculino,
            femenino,
            total: masculino + femenino,
            menores,
            adultos,
            adultosMayores,
            estudiantes,
            trabajadores,

        }
        return {stadistic}


    }catch(error){
        return(error)
    }
}
async function getFamily(idfamilia) {
    try{
        const query = "SELECT * FROM habitantes WHERE idfamilia = $1"
        const values = [idfamilia]
        const result = await client.query(query, values)
        return result.rows
    }catch(error){
        return error
    }
}
async function getByFilter(filter, value) {
    try{
        let query = `SELECT * FROM habitantes`;
        let values = [];

        // Si no es "todos", añade una cláusula WHERE
        if (filter !== 'todos' && filter !== 'edad') {
            query += ` WHERE ${filter} = $1`;
            values = [value]; // Solo asigna valores si hay filtro
        }
        if (filter == 'edad') {
            if(value == 'menor'){
                query += ` WHERE DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) < 18`;
            }
            if(value == 'adulto'){
                query += ` WHERE DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) >= 18`;
            }
            if(value == 'mayor'){
                query += ` WHERE (genero = 'FEMENINO' AND DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) >= 55) OR (genero = 'MASCULINO' AND DATE_PART('year', AGE(TO_DATE(fnacimiento, 'YYYY-MM-DD'))) >= 60)`;
            }
            
        }

        const result = await client.query(query, values);
        return result.rows;
    }catch(error){
        return error
    }
    
}

module.exports = {
    createPerson,
    createFamily,
    getPersonByCedula,
    getFamilyByCedula,
    getPersonById,
    addfamily,
    addSocialInfo,
    getSocialInfo,
    getPersonByEmail,
    gethabitantes,
    getStadistic,
    updatePerson,
    getFamily,
    getByFilter,
    deleteFamily,
    deletePersonFamily,
    deletePerson
}