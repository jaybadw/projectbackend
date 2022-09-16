const ServiceSchema = new mongoose.Schema(
	{
		name: { type: String,  unique: true },
		image: { type:String,  unique: true },
		description: { type: String, 
			unique: true },

	},
	
)

module.exports = mongoose.model('Service', ServiceSchema)
