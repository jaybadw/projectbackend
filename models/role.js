const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema(
	{
		role:String

	},
)
	

module.exports = mongoose.model('Role', RoleSchema);
