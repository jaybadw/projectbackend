var mongoose = require('mongoose');
var Schema = mongoose.Schema;
RoleSchema = new Schema({
   role: String
});
module.exports = mongoose.model('Role', RoleSchema);