const express = require('express')
const router = express.Router()
const upload = require('../middlewares/vendoruploadmiddleware')
const VendorController = require('../controllers/vendor.controller')

router.route('/').get(VendorController.getAll).post(upload.single('image'), VendorController.createOne)

router
	.route('/:vendorID')
	.get(VendorController.getOne)
	.patch(VendorController.updateOne)
	.delete(VendorController.deleteOne)

module.exports = router
