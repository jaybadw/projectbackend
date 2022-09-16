
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller');

const cors = require('cors')

const UserController = require('../controllers/user.controller');
  

//route for login
router
    .route('/login')
    .post(authController.login)

 //route where user is created    
router
.route('/create')
.post(UserController.createOne)


router.route('/user')
.get(authController.getAuthUser)



module.exports = router;