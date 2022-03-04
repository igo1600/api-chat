const router = require('express').Router();
const controller = require('./messages.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

module.exports = router;

