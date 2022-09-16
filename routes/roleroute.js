const express = require('express')
const router = express.Router()
const RoleController = require('../controllers/role.controller')

router.route('/').get(RoleController.getAll).post(RoleController.createOne)

router
	.route('/:id')
	.get(RoleController.getOne)
	.patch(RoleController.updateOne)
	.delete(RoleController.deleteOne)

module.exports = router