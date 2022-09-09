const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')

router.route('/').get(UserController.getAll)
.post (UserController.createOne)



router
	.route('/:UserID')
	.get(UserController.getOne)
	.patch(UserController.updateOne)
	.delete(UserController.deleteOne)

module.exports = router
