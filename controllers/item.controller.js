const Item = require('../models/Item')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class ItemController {
	static createOne = async (req, res) => {
		try {
			const newitem = await Item.create(req.body)
			return SuccessResponse(res, newitem, undefined, 201)
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
			
		}
	
		
	}

	static getOne = async (req, res) => {
		try {
			const item = await Item.findById(req.params.itemID)
			return SuccessResponse(res, item)
			
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			const categories = await Item.find().where('category').ne([]).populate('category')
			return SuccessResponse(res, categories)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedItem = await Item.findOneAndUpdate(
				req.params.itemID,
				req.body
			)
			return SuccessResponse(res, updatedItem)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await Item.findByIdAndDelete(req.params.itemID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
	
}

module.exports = ItemController
