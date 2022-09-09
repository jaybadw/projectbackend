const Vendor = require('../models/Vendor')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class VendorController {
	static createOne = async (req, res) => {
		try {
			if (req.file){
				req.body.image = req.file.path;
			}
			const newvvndor = await Vendor.create(req.body)
			return SuccessResponse(res, newvendor, undefined, 201)
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
			
		}
	
		
	}

	static getOne = async (req, res) => {
		try {
			const vendor = await Vendor.findById(req.params.vendorID)
			return SuccessResponse(res, vendor)
			
		} catch (err) {
			console.log(err)
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			const categories = await Vendor.find({})
			return SuccessResponse(res, categories)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedVendor = await Vendor.findOneAndUpdate(
				req.params.vendorID,
				req.body
			)
			return SuccessResponse(res, updatedVendor)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await Vendor.findByIdAndDelete(req.params.vendorID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
}

module.exports = VendorController
