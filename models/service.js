const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		image: { type:String, required: true, unique: true },
		description: { type: String, required: true, unique: true },

	},
	
)

module.exports = mongoose.model('Service', ServiceSchema)
