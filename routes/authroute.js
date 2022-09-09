
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller');

const cors = require('cors')

const UserController = require('../controllers/user.controller');
  
// var whitelist = ['http://localhost:4200','http://localhost:8080']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.includes(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

router
    .route('/login')
    .post(authController.login)
router
.route('/create')
.post(UserController.createOne)





module.exports = router;