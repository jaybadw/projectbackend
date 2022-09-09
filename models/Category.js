const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		image: { type:String, required: true, unique: true },
		description: { type: String, required: true, unique: true },

	},
	{ collection: 'categories' }
)

module.exports = mongoose.model('Category', CategorySchema)
