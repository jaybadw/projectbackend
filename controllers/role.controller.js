const Role = require('../models/role')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class RoleController {
	static createOne = async (req, res) => {
		try {
			// if (req.file){
			// 	req.body.image = req.file.path;
			// }
			const newrole = await Role.create(req.body)
			return SuccessResponse(res, newrole, undefined, 201)
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
			
		}
	
		
	}

	static getOne = async (req, res) => {
		try {
			const role = await Role.findById(req.params.id)
			return SuccessResponse(res, role)
			
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			const categories = await Role.find({})
			return SuccessResponse(res, categories)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedRole = await Role.findByIdAndUpdate(
				req.params.id,
				req.body
			)
			return SuccessResponse(res, updatedRole)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await Role.findByIdAndDelete(req.params.roleID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
}

module.exports = RoleController
