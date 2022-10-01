const mongoose = require('mongoose')

const VendorSchema = new mongoose.Schema(
	{
		image:{type: String, required: true, unique: true},
		fname: { type: String, required: true, unique: true },
		lname: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		startdate: { type: String, required: true },
		farmbase: { type: String, required: true },
		
		
	},
	{ timestamps: true, }
)

module.exports = mongoose.model('Vendor',VendorSchema)