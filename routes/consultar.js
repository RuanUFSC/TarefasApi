const express = require('express')
const router = express.Router()
const controller = require('../controllers/consultar')

router.get('/tarefas', controller.tarefas)
router.get('/tarefa/:id', controller.tarefasID)


module.exports = router