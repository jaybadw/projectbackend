const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv/config')


const { AccessToken, JSONResponse } = require('../lib/loggers');
const { ErrorResponse,SuccessResponse } = require('../lib/helpers');

class AuthController {
	static login = async (req, res, next) => {
		let { email, password } = req.body
		let existingUser
		let token

		try {
			existingUser = await User.findOne({ email: email })
			if (!existingUser || !bcrypt.compareSync(password, existingUser.password)) {
				return ErrorResponse(res, undefined, 'Wrong details please check at once', 401);
			}
			// if user found
			token = AccessToken({
					_id: existingUser.id,
					email: existingUser.email,
					role: existingUser.role,
			});
			//covert to js object
			existingUser = existingUser.toObject()
			//remove password field 
			delete existingUser.password
			return SuccessResponse(res, existingUser, 'login success')
		} catch (err) {
			return ErrorResponse(res, undefined, err, 500);
		}
	}

	static getAuthUser = async (req, res) => {
		const authHeader = req.headers['authorization']
		const token = authHeader && authHeader.split(' ')[1]
		let authUser = new User()

		if (token == null) return res.sendStatus(401) //401 - unauthorized

		const { _id } = jwt.decode(token) //decode token

		try {
			authUser = await User.findById(_id).select('_id email role').populate('role') //populate auth user

			if (authUser && authUser.role == null) authUser.depopulate('role') //depopulate if populated field is null

			return JSONResponse.success(res, undefined, authUser)
		} catch (error) {
			return JSONResponse.error(res, 'error finding auth user', error, 404)
		}
	}
}


	
module.exports = AuthController