const Service = require('../models/service')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class ServiceController {
	static createOne = async (req, res) => {
		try {
			if (req.file){
				req.body.image = req.file.path;
			}
			const newservice = await Service.create(req.body)
			return SuccessResponse(res, newservice, undefined, 201)
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
			
		}
	
		
	}

	static getOne = async (req, res) => {
		try {
			const service = await Service.findById(req.params.serviceID)
			return SuccessResponse(res, service)
			
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			const categories = await Service.find({})
			return SuccessResponse(res, categories)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedService = await Service.findByIdAndUpdate(
				req.params.id,
				req.body
			)
			return SuccessResponse(res, updatedService)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await Service.findByIdAndDelete(req.params.serviceID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
}

module.exports = ServiceController
