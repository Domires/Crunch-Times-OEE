const ProducaoController = require('../controllers/ProducaoController')

const router = require('express').Router()

router.post('/new-producao', ProducaoController.newProducao) // create
router.get('/read-producao', ProducaoController.readProducao) // read
// router.post('/api/refresh', ProducaoController.refreshProducao) // refresh power bi

module.exports = router