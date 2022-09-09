const express = require('express')
const router = express.Router()
const upload = require('../middlewares/categoryupload.middleware')
const CategoryController = require('../controllers/category.controller')

router.route('/').get(CategoryController.getAll).post(upload.single('image'), CategoryController.createOne)

router
	.route('/:categoryID')
	.get(CategoryController.getOne)
	.patch(CategoryController.updateOne)
	.delete(CategoryController.deleteOne)

module.exports = router
