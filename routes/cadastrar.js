const express = require('express')
const router = express.Router()
const controller = require('../controllers/cadastrar')

router.post('/adicionar-tarefa', controller.tarefas)



module.exports = router