require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()
// const cookieSession = require("cookie-session");
const ip = require('ip')
const User = require('./models/user')
const Roles = require('./models/role')


const mongoDb = require('./db');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const NAME = process.env.NAME || 'farm-project'

// const userInput ={
// 	username: "farmerswin3",
// 	password: "1234567",
// 	role :"admin"
// }

// const user = new User (userInput);
// user.save((err,document)=>{
// 	if(err)
// 	  console.log(err);
// 	console.log(document);  

// });



/* Middlewares */
app.use(express.json())
app.use(bodyParser.json());
// app.use(
// 	cookieSession({
// 	  name: "user-session",
// 	  secret: process.env.COOKIE, // should use as secret environment variable
// 	  httpOnly: true
// 	})
//   );
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors())
app.listen(PORT, () => {
	console.log('Listening on port ' + PORT)
  })
/* Routers */


const categoryRouter = require('./routes/categoryroute')
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute')
const itemRouter = require('./routes/itemroute')



// app.use('/', indexRouter)
app.use('/item', itemRouter)
app.use('/category', categoryRouter)
app.use('/user', userRouter)
app.use('/auth',authRouter)

/* Start Express App */0
// mongoose.Promise= global.promise;
mongoose.connect(mongoDb.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true
  }).then(() => {
	  console.log('Database sucessfully connected ')
	},
	error => {
	  console.log('Database error: ' + error)
	}
  )