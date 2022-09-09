const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema(
	{
		image:{type: String},
		name: { type: String },
		category:[ {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Category'}],
		price: { type:String, },
		quantity: { type: Number, },
	},
	{ timestamps: true, collection: 'items' }
)

module.exports = mongoose.model('Item', ItemSchema)