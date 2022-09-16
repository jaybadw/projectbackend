const SubCategory = require('../models/subcategory')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class SubCategoryController {
	static createOne = async (req, res) => {
		try {
			// let data = {
			// 	name: req.body.name,
			// 	description: req.body.description,
			// 	image: req.body.image,
			// 	category: req.body.category,
			// }

			if (req.file){
				req.body.image = req.file.path;
			}
			const newsubcategory = await SubCategory.create(req.body)
			console.log(req.body);
			return SuccessResponse(res, newsubcategory, undefined, 201)
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
			
		}
	
		
	}

	static getAll = async (req, res) => {
		try {
			const subcategory = await SubCategory.find()
			return SuccessResponse(res, subcategory)
			
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}
	static getOne = async (req, res) => {
		try {
			const subcategory = await SubCategory.findById(req.params.subcategoryID)
			return SuccessResponse(res, subcategory)
			
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static getOneByCategory = async (req, res) => {
		try {
			const subcategories = await SubCategory.find({
				category: req.params.id
			})
			return SuccessResponse(res, subcategories)
		} catch (err) 
		
		{
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedSubCategory = await SubCategory.findByIdAndUpdate(
				req.params.id,
				req.body
			)
			return SuccessResponse(res, updatedSubCategory)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await SubCategory.findByIdAndDelete(req.params.subcategoryID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
	
}

module.exports = SubCategoryController
