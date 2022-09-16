const User = require('../models/user')
const bcrypt= require('bcrypt')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')


class UserController {
	static createOne = async (req, res) => {
		try {
			const salt = await bcrypt.genSalt(10)
			const hashedPassword = await bcrypt.hash(req.body.password,salt)
			const newUser = await User.create({
				username: req.body.username,
				role:req.body.role,
				email: req.body.email,
				password:hashedPassword,
				startdate: new Date().toLocaleDateString()
			})



			return SuccessResponse(res, newUser, undefined, 201)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static getOne = async (req, res) => {
		try {
			const User = await User.findById(req.params.userID)
			return SuccessResponse(res, User)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
	static getVendor = async (req, res) => {
		try {
			const User = await User.findById(req.params.role)
			return SuccessResponse(res, User)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			const user= await User.find({})
			return SuccessResponse(res, user)
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try{
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
		const updatedUser = await User.findByIdAndUpdate(req.params.UserID,
		{
		  userName: req.body.userName,
		  password: hashedPassword,
		 },
		 {new: true}
		 )
			return SuccessResponse(res, updatedUser)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await User.findOneAndDelete(req.params.UserID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
}

module.exports = UserController
