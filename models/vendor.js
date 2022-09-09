const mongoose = require('mongoose')

const VendorSchema = new mongoose.Schema(
	{
		image:{type: String, required: true, unique: true},
		name: { type: String, required: true, unique: true },
		category: {
			type: mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: 'Category',
		},
		price: { type: Number, required: true },
		quantity: { type: Number, required: true },
	},
	{ timestamps: true, collection: 'items' }
)

module.exports = mongoose.model('Vendor',VendorSchema)