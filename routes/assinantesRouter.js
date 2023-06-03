const express = require('express');
const router = express.Router();
const assinantesController = require('../controllers/assinantesController');

router.get('/', assinantesController.listar);
router.post('/save', assinantesController.salvar);
router.get('/:id', assinantesController.buscarPorId);
router.get('/name/:nome', assinantesController.buscarPorNome);
router.get('/surname/:sobrenome', assinantesController.buscarPorSobreNome);
router.get('/city/:cidade', assinantesController.buscarPorCidade);
router.get('/status/:status', assinantesController.buscarPorStatus);
router.get('/estado/:estado', assinantesController.buscarPorEstado);
router.put('/att/:id', assinantesController.atualizar);
router.delete('/:id', assinantesController.excluir);

module.exports = router;
