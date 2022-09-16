const Item = require('../models/item')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class ItemController {
	static createOne = async (req, res) => {
		try {
			if (req.file){
				req.body.image = req.file.path;
			}
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
	static getOneBySubcategory = async (req, res) => {
		try {
			const items = await Item.find({
				subcategory: req.params.id
			})
			return SuccessResponse(res, subcategories)
		} catch (err) 
		
		{
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			// const subcategories = await Item.find().where('SubCategory').ne([]).populate('SubCategory')
			const subcategories = await Item.find()
			return SuccessResponse(res, subcategories, 'worked')
			// console.error();
		} catch (err) {
			return ErrorResponse(res, err, 'did not find')
			console.error();
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedItem = await Item.findByIdAndUpdate(
				req.params.id,
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
