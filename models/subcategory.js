const mongoose = require('mongoose')

const SubCategorySchema = new mongoose.Schema(
	{
		name: { type: String  },
		// name: { type: String,  unique: true },
		image: { type:String },
		// image: { type:String, unique: true },
		description: { type: String  },
		// description: { type: String, unique: true },
        category:[ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category'}],

	},
	// { collection: 'subcategories' }
)

module.exports = mongoose.model('SubCategory', SubCategorySchema)
