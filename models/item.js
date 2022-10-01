const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema(
	{
		image:{type: String},
		name: { type: String },
		description: { type: String },
		subcategory:[ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'SubCategory'}],
		price: { type:String, },
		quantity: { type: String },
		vendor:{type:mongoose.Schema.Types.ObjectId, 
			ref: 'Vendor'}
	},
	{ timestamps: true, }
)

module.exports = mongoose.model('Item', ItemSchema)