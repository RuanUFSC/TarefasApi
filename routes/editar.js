const express = require('express')
const router = express.Router()
const controller = require('../controllers/editar')


router.put('/marcar-andamento/:id', controller.marcarAndamento)
router.put('/marcar-concluida/:id', controller.marcarConcluida)


module.exports = router