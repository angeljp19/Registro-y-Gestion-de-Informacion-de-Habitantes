const {personSchema, userSchema, familySchema, socialInfoSchema, personSchemaUpdate, addFamilySchema, filterSchema, deleteUserSchema} = require('../middleware/joiSchemas/sanitizeCreateUser')
const {sanitizeInput} = require('../middleware/middleSanitize')
const express = require('express')
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const router = express.Router()

router.post('/verifyUser', userController.verifyUser)
router.post('/verifyToken', userController.verifyToken)
router.post('/createUser',  sanitizeInput(userSchema), userController.createUser)
router.post('/deleteUser',  sanitizeInput(deleteUserSchema), userController.deleteUser)
router.post('/logout', userController.logout)

router.post('/createPerson', sanitizeInput(personSchema), adminController.createPerson)
router.post('/deletePerson', adminController.deletePerson)
router.post('/createFamily', sanitizeInput(familySchema), adminController.createFamily)
router.post('/addFamily', sanitizeInput(addFamilySchema), adminController.addfamily)
router.post('/addSocialInfo', sanitizeInput(socialInfoSchema), adminController.addSocialInfo)
router.post('/getHabitantes', adminController.gethabitantes)
router.post('/getStadistic', adminController.getStadistic)
router.post('/getPerson', adminController.getPersonById)
router.post('/getPersonByCedula', adminController.getPersonByCedula)

router.post('/getSocialInfo', adminController.getSocialInfo)
router.post('/updatePerson',sanitizeInput(personSchemaUpdate), adminController.updatePerson)
router.post('/getFamily',sanitizeInput(familySchema), adminController.getFamily)
router.post('/deleteFamily', adminController.deleteFamily)
router.post('/deletePersonFamily', adminController.deletePersonFamily)

router.post('/getByFilter', sanitizeInput(filterSchema), adminController.generatePdf)


module.exports = router   