const express = require('express')
const router = express.Router()
const ItemsController = require('../controllers/item.controller')
const upload= require('../middlewares/itemupload.middleware')

router.route('/').get(ItemsController.getAll).post(upload.single('image'),ItemsController.createOne)

router
	.route('/:id')
	.get(ItemsController.getOneBySubcategory)
	.patch(ItemsController.updateOne)
	.delete(ItemsController.deleteOne)

module.exports = router
