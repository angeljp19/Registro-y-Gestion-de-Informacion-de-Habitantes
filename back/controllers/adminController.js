const adminModel = require('../models/adminModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const PDFDocument = require('pdfkit-table');
// const pdftable = require('pdfkit-table')
const path = require('path')
const fs = require('fs')


async function createPerson(req, res) {
    try {
        // Mapea los campos que vienen del cuerpo de la petición, asegurando que los vacíos sean null
        const fields = [
            'nombres', 'apellidos', 'cedula', 'genero', 'instruccion', 'ocupacion',
            'fnacimiento', 'centrovotacion', 'sectortrabajo', 'estatusvivienda',
            'correo', 'direccionvivienda', 'telefono', 'idfamilia', 'parentesco'
        ];
        // Crea un array donde los campos vacíos se convierten en null
        const data = fields.map(field => req.body[field]?.trim() === "" ? null : req.body[field]?.trim());
        // Validación de cédula 
        const cedulaExist = await adminModel.getPersonByCedula(data[2])
        if (cedulaExist[0]) {
            return res.status(409).json({ message: "Cedula ya registrada" });
        }
        const emailExist = await adminModel.getPersonByEmail(data[11])
        if (emailExist[0]) {
            return res.status(409).json({ message: "Email ya registrado" });
        }


        // Inserta los datos en la base de datos
        const result = await adminModel.createPerson(data);
        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error en el servidor', details: error });
    }
}
async function updatePerson(req, res) {
    try {
        // Mapea los campos que vienen del cuerpo de la petición, asegurando que los vacíos sean null
        const fields = [
            'idhabitante','nombres', 'apellidos', 'cedula', 'genero', 'instruccion', 'ocupacion',
            'fnacimiento', 'centrovotacion', 'sectortrabajo', 'estatusvivienda',
            'correo', 'direccionvivienda', 'telefono', 'idfamilia', 'parentesco'
        ];
        // Crea un array donde los campos vacíos se convierten en null
        const data = fields.map(field => req.body[field]?.trim() === "" ? null : req.body[field]?.trim());
        // Validación de cédula 
        const actualData= await adminModel.getPersonByCedula(data[3])
        if (actualData[0]) {
            if(actualData[0].id != data[0]){
                return res.status(409).json({ message: "Cedula ya registrada" });
            } 
        }
      
        const result = await adminModel.updatePerson(data);
        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error en el servidor', details: error });
    }
}
async function deletePerson(req, res) {
    try{
        const id = req.body.id.trim()
        if(!id){
            return res.json({message:'falta id'})
        }
        const result = await adminModel.deletePerson(id);
        return res.status(200).json(result);
    }catch(error){
        return error
    }
    
}
async function createFamily(req, res) {
    try{
        const cedula = req.body.cedula.trim()
        if(!cedula){
            return res.status(400).json({message: "Ingrese una cedula valida"})
        }
        const familyExist = await adminModel.getFamilyByCedula(cedula)
        if(familyExist[0] && familyExist[0].idfamilia !== null){
            return res.status(409).json({message: "La persona ya pertenece a una familia"})
        }
        const id = await adminModel.getPersonByCedula(cedula)
        if(id[0]){
            const result = await adminModel.createFamily(id[0].id)
            return res.status(200).json({message: result})
        }
        return res.status(400).json({message: "Cedula no registrada"})
        
        
    }catch(error){
        return error
    }
}
async function addfamily(req, res) {
    try{
        const cedulaJefe = req.body.cedulaJefe.trim()
        const id = req.body.id.trim()
        const parentesco = req.body.parentesco.trim()

        const familyExist = await adminModel.getPersonById(id)
        if(familyExist[0].idfamilia){
            return res.status(409).json({message: "La persona ya pertenece a una familia"})
        }
        const idfamiliar = await adminModel.getFamilyByCedula(cedulaJefe)
        console.log(idfamiliar)
        if(!idfamiliar[0]?.idfamilia){
            return res.status(409).json({message: "El jefe no pertenece a una familia"})
        }

        const result = await adminModel.addfamily(id, idfamiliar[0].idfamilia, parentesco)
        return res.status(200).json({message: result})


    }catch(error){
        return error
    }
}
async function addSocialInfo(req, res) {
    try{
        const fields = [
            'idhabitante', 'granmisionvivienda', 'barrionuevobarriotricolor', 'beneficiadojefepatria', 'partohumanizado', 'semanasparto',
            'fechaparto', 'ivss', 'lactancia', 'bajopeso', 'beneficiadoinn',
            'chambajuvenil', 'amormayor', 'otrosbeneficios', 'registradoenpatria', 'personacondiscapacidad', 'tipodiscapacidad', 'carnetconapdis', 'beneficiadojosegregoriohernandez', 'beneficiadovenapp', 'padecimientos', 'medicinas', 'patioproductivo', 'descripcionpatioproductivo', 'habilidadesdestrezas', 'mascotas', 'brigadistamsv', 'liderdecalle'
        ];

        const data = fields.map(field => req.body[field]);
        const personExist = await adminModel.getPersonById(data[0])
        if(!personExist[0]){
            return res.status(400).json({message: "ID no registrado"})
        }

        const result = await adminModel.addSocialInfo(data)
        return res.status(200).json({message: result})

    }catch(error){
        
    }
}
async function gethabitantes(req, res) {
    try{
        const result = await adminModel.gethabitantes()
        return res.status(200).json(result)
    }catch(error){
        return error
    }
}
async function getStadistic(req, res) {
    try{
        const result = await adminModel.getStadistic()
        return res.status(200).json(result)
    }catch(error){
        return error
    } 
}
async function getPersonById(req, res) {
    try{
        const result = await adminModel.getPersonById(req.body.id)
        return res.status(200).json(result)
    }catch(error){
        return error
    } 
}
async function getSocialInfo(req, res) {
    try{
        const result = await adminModel.getSocialInfo(req.body.id)
        if(!result[0]){
            return res.status(200).json([{
                "idhabitante": req.body.id,
                "granmisionvivienda": null,
                "barrionuevobarriotricolor": null,
                "beneficiadojefepatria": null,
                "partohumanizado": null,
                "semanasparto": "",
                "fechaparto": "",
                "ivss": null,
                "lactancia": null,
                "bajopeso": null,
                "beneficiadoinn": null,
                "chambajuvenil": null,
                "amormayor": null,
                "otrosbeneficios": "",
                "registradoenpatria": null,
                "personacondiscapacidad": null,
                "tipodiscapacidad": "",
                "carnetconapdis": null,
                "beneficiadojosegregoriohernandez": null,
                "beneficiadovenapp": null,
                "padecimientos": "",
                "medicinas": "",
                "patioproductivo": null,
                "descripcionpatioproductivo": "",
                "habilidadesdestrezas": "",
                "mascotas": null,
                "brigadistamsv": "",
                "liderdecalle": ""
              }])
        }
        return res.status(200).json(result)
    }catch(error){
        return error
    }
}
async function getPersonByCedula(req, res) {
    try{
        const result = await adminModel.getPersonByCedula(req.body.cedula)
        return res.status(200).json(result)
    }catch(error){
        return error
    }
}
async function getFamily(req, res) {
    try{
        const exist = await adminModel.getPersonByCedula(req.body.cedula)
        if(exist[0]?.idfamilia){
            const result = await adminModel.getFamily(exist[0].idfamilia)
            return res.status(200).json(result)
        }   
        return res.status(400).json("Cedula no registrada o no asignada a una familia")
    }catch(error){
        return error
    }
}
async function getByFilter(req, res) {
    try{
        const result = await adminModel.getByFilter(req.body.filter, req.body.value)
        res.status(200).json(result)
    }catch(error){

    }
}
async function generateAndSavePdf(filter, value) {
    const doc = new PDFDocument();
    const filePath = path.join(__dirname, 'reportes', `reporte_${filter}_${value}.pdf`);
    const stream = fs.createWriteStream(filePath);
    
    doc.pipe(stream);

    // Obtener los datos de la base de datos
    const result = await adminModel.getByFilter(filter, value)

    // Título del reporte
    doc.fontSize(18).text("Reporte de Habitantes de la Comunidad", { align: 'center' });
    
    
    // Fecha de generación del reporte
    const fechaGeneracion = new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    doc.fontSize(12).text(`Fecha de generación: ${fechaGeneracion}`, { align: 'center' });
    doc.moveDown();

    // Filtro utilizado en el reporte
    if(filter == "todos"){
        doc.fontSize(12).text(`Filtro aplicado: `, {
            align: 'left',
        });
        doc.moveDown();
    }else{
        doc.fontSize(12).text(`Filtro aplicado: ${filter} = ${value}`, {
            align: 'left',
        });
        doc.moveDown();
    }
    

    // Crear una tabla con los datos de habitantes
    const table = {
        headers: ["Nombres", "Apellidos", "Cédula", "Teléfono", "Correo", "Dirección", "Fecha de Nacimiento"],
        rows: result.map(habitante => [
            habitante.nombres || "N/A",
            habitante.apellidos || "N/A",
            habitante.cedula || "N/A",
            habitante.telefono || "N/A", // Reemplazar por "N/A" si es nulo
            habitante.correo || "N/A",
            habitante.direccionvivienda || "N/A",
            habitante.fnacimiento ? new Date(habitante.fnacimiento).toLocaleDateString('es-ES') : "N/A" // Formateo de la fecha
        ])
    };

    // Agregar la tabla al PDF
    doc.table(table, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(12),
        prepareRow: (row, i) => doc.font("Helvetica").fontSize(10),
        padding: 5,
        columnSpacing: 5,
        width: 500
    });

    // Finalizar el documento
    doc.end();

    // Retorna la ruta del archivo generado
    return new Promise((resolve, reject) => {
        stream.on('finish', () => resolve(filePath));
        stream.on('error', reject);
    });
}
async function generatePdf(req, res){
    try {
        const filePath = await generateAndSavePdf(req.body.filter, req.body.value);
        res.download(filePath, 'reporte.pdf'); // Enviar el archivo al cliente
    } catch (error) {
        res.status(500).send(error);
    }
};

async function deleteFamily(req, res) {
    try{
        const result = await adminModel.deleteFamily(req.body.idfamilia)
        res.status(200).json(result)
    }catch(error){

    }
}
async function deletePersonFamily(req, res) {
    try{
        const result = await adminModel.deletePersonFamily(req.body.id)
        res.status(200).json(result)
    }catch(error){

    }
}



module.exports = {
    createPerson,
    createFamily,
    addfamily,
    addSocialInfo,
    gethabitantes,
    getStadistic,
    getPersonById,
    getSocialInfo,
    updatePerson,
    getPersonByCedula,
    getFamily,
    getByFilter,
    generatePdf,
    generateAndSavePdf,
    deleteFamily,
    deletePersonFamily,
    deletePerson
}