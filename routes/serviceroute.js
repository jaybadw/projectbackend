const express = require('express')
const router = express.Router()
const upload = require('../middlewares/serviceupload.middleware')
const ServiceController = require('../controllers/service.controller')

router.route('/').get(ServiceController.getAll).post(upload.single('image'), ServiceController.createOne)

router
	.route('/:serviceID')
	.get(ServiceController.getOne)
	.patch(ServiceController.updateOne)
	.delete(ServiceController.deleteOne)

module.exports = router
