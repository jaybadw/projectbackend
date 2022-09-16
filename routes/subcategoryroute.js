const express = require('express')
const router = express.Router()
const SubCategoryController = require('../controllers/subcategory.controller')
const upload= require('../middlewares/subcategoryupload.middleware')

router.route('/')
. get(SubCategoryController.getAll)  
.post(upload.single('image'), SubCategoryController.createOne)

router
	.route('/:id')
	// .get(SubCategoryController.getOne)
	.get(SubCategoryController.getOneByCategory)
	.get(SubCategoryController.getAll)
	.patch(SubCategoryController.updateOne)
	.delete(SubCategoryController.deleteOne)

module.exports = router
