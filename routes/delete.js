const express = require('express')
const router = express.Router()
const controller = require('../controllers/delete')

router.delete('/deletar-tarefa/:id', controller.delete)



module.exports = router