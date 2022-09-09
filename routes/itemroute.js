const express = require('express')
const router = express.Router()
const ItemsController = require('../controllers/item.controller')

router.route('/').get(ItemsController.getAll).post(ItemsController.createOne)

router
	.route('/:id')
	.get(ItemsController.getOne)
	.patch(ItemsController.updateOne)
	.delete(ItemsController.deleteOne)

module.exports = router
